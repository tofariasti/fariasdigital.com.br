#!/usr/bin/env node
import { chromium } from 'playwright';
import { mkdir, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT = join(ROOT, 'test-results', 'responsive');
const BASE = process.env.TEST_BASE_URL || 'http://localhost:8888';

const VIEWPORTS = [
  { name: 'iphone-se', width: 375, height: 667, isMobile: true },
  { name: 'iphone-14', width: 390, height: 844, isMobile: true },
  { name: 'iphone-14-pro-max', width: 430, height: 932, isMobile: true },
  { name: 'galaxy-s8', width: 360, height: 740, isMobile: true },
  { name: 'ipad-portrait', width: 768, height: 1024, isMobile: true },
  { name: 'ipad-landscape', width: 1024, height: 768, isMobile: false },
  { name: 'laptop', width: 1280, height: 800, isMobile: false },
  { name: 'desktop-hd', width: 1440, height: 900, isMobile: false },
];

const PAGES = [
  { path: '/', slug: 'home' },
  { path: '/pacotes/', slug: 'pacotes' },
  { path: '/drone/', slug: 'drone' },
  { path: '/sobre/', slug: 'sobre' },
];

async function auditPage(page, viewport) {
  const issues = [];

  const overflow = await page.evaluate(() => {
    const doc = document.documentElement;
    const hasHScroll = doc.scrollWidth > doc.clientWidth + 2;
    const offenders = [];
    document.querySelectorAll('*').forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.width < 1 || r.height < 1) return;
      if (r.right > window.innerWidth + 6 || r.left < -6) {
        const cls = (el.className && typeof el.className === 'string')
          ? el.className.split(' ').filter(Boolean).slice(0, 2).join('.')
          : '';
        if (!cls.includes('ambient') && el.tagName !== 'HTML' && el.tagName !== 'BODY') {
          offenders.push({
            tag: el.tagName.toLowerCase(),
            cls,
            right: Math.round(r.right),
            left: Math.round(r.left),
            vw: window.innerWidth,
          });
        }
      }
    });
    return { hasHScroll, offenders: offenders.slice(0, 10) };
  });

  if (overflow.hasHScroll) {
    issues.push({ type: 'horizontal-overflow', detail: 'Scroll horizontal detectado' });
  }
  overflow.offenders.forEach((o) => {
    issues.push({
      type: 'off-screen',
      detail: `${o.tag}.${o.cls || '-'} fora da tela (L:${o.left} R:${o.right}, vw:${o.vw})`,
    });
  });

  const smallTargets = await page.evaluate(() => {
    return [...document.querySelectorAll('a, button, .btn')]
      .map((el) => {
        const r = el.getBoundingClientRect();
        if (r.width < 1) return null;
        if (r.width >= 44 && r.height >= 44) return null;
        return {
          text: (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 28),
          w: Math.round(r.width),
          h: Math.round(r.height),
        };
      })
      .filter(Boolean)
      .slice(0, 6);
  });

  smallTargets.forEach((t) => {
    issues.push({ type: 'tap-target', detail: `"${t.text}" ${t.w}×${t.h}px (< 44px)` });
  });

  const heroTitle = await page.$('.hero__title');
  if (heroTitle) {
    const box = await heroTitle.boundingBox();
    if (box && box.width > viewport.width - 8) {
      issues.push({
        type: 'hero-width',
        detail: `Título ${Math.round(box.width)}px em viewport ${viewport.width}px`,
      });
    }
  }

  return issues;
}

async function testMobileNav(page) {
  const issues = [];
  const toggle = page.locator('[data-nav-toggle]');
  if (!(await toggle.isVisible())) return issues;

  await toggle.click();
  await page.waitForTimeout(200);
  const open = await page.locator('[data-mobile-nav]').evaluate((el) => el.classList.contains('is-open'));
  if (!open) issues.push({ type: 'mobile-nav', detail: 'Menu não abriu' });

  const links = page.locator('[data-mobile-nav] a');
  const count = await links.count();
  for (let i = 0; i < Math.min(count, 3); i++) {
    const box = await links.nth(i).boundingBox();
    if (box && box.height < 44) {
      issues.push({ type: 'nav-link', detail: `Item menu altura ${Math.round(box.height)}px` });
    }
  }
  return issues;
}

async function main() {
  await mkdir(OUT, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const report = { testedAt: new Date().toISOString(), baseUrl: BASE, results: [] };

  for (const vp of VIEWPORTS) {
    for (const { path, slug } of PAGES) {
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        isMobile: vp.isMobile,
        hasTouch: vp.isMobile,
        deviceScaleFactor: vp.isMobile ? 2 : 1,
      });
      const page = await context.newPage();
      const entry = {
        viewport: vp.name,
        size: `${vp.width}×${vp.height}`,
        page: slug,
        issues: [],
        screenshots: [],
      };

      try {
        await page.goto(BASE + path, { waitUntil: 'networkidle', timeout: 45000 });
        await page.waitForTimeout(1500);

        const viewportShot = `${slug}-${vp.name}.png`;
        const fullShot = `${slug}-${vp.name}-full.png`;
        await page.screenshot({ path: join(OUT, viewportShot) });
        await page.screenshot({ path: join(OUT, fullShot), fullPage: true });
        entry.screenshots = [viewportShot, fullShot];

        entry.issues.push(...await auditPage(page, vp));

        if (slug === 'home' && vp.isMobile && vp.width < 768) {
          entry.issues.push(...await testMobileNav(page));
        }
      } catch (err) {
        entry.issues.push({ type: 'error', detail: err.message });
      }

      report.results.push(entry);
      await context.close();
    }
  }

  await browser.close();

  const summary = {};
  report.results.forEach((r) => {
    const key = `${r.page}@${r.viewport}`;
    summary[key] = r.issues.length;
  });

  report.summary = {
    totalChecks: report.results.length,
    withIssues: report.results.filter((r) => r.issues.length > 0).length,
    byViewport: summary,
  };

  await writeFile(join(OUT, 'report.json'), JSON.stringify(report, null, 2));

  console.log('\n=== Responsive UI/UX Report ===\n');
  report.results.forEach((r) => {
    const status = r.issues.length ? '⚠' : '✓';
    console.log(`${status} ${r.page.padEnd(6)} ${r.viewport.padEnd(18)} ${r.size}`);
    r.issues.forEach((i) => console.log(`    → [${i.type}] ${i.detail}`));
  });
  console.log(`\nScreenshots: ${OUT}`);
  console.log(`Issues: ${report.summary.withIssues}/${report.summary.totalChecks} viewports com problema\n`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
