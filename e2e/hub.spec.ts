import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const ROUTES_PT = ['/', '/sites/', '/portfolio/', '/faq/', '/por-que-site/', '/drone/', '/sobre/']
const ROUTES_EN = ROUTES_PT.map((r) => (r === '/' ? '/en/' : `/en${r}`))
const ROUTES_ES = ROUTES_PT.map((r) => (r === '/' ? '/es/' : `/es${r}`))

test.describe('Hub navigation', () => {
  for (const route of ROUTES_PT) {
    test(`loads ${route}`, async ({ page }) => {
      await page.goto(route)
      await expect(page.locator('header.site-header')).toBeVisible()
      await expect(page.locator('main')).toBeVisible()
    })
  }

  for (const route of ROUTES_EN) {
    test(`loads EN ${route}`, async ({ page }) => {
      await page.goto(route)
      await expect(page.locator('header.site-header')).toBeVisible()
      await expect(page.locator('main')).toBeVisible()
    })
  }

  for (const route of ROUTES_ES) {
    test(`loads ES ${route}`, async ({ page }) => {
      await page.goto(route)
      await expect(page.locator('header.site-header')).toBeVisible()
      await expect(page.locator('main')).toBeVisible()
    })
  }

  test('header navigation works (PT)', async ({ page }) => {
    await page.goto('/')
    const toggle = page.locator('.nav-toggle')
    if (await toggle.isVisible()) {
      await toggle.click({ force: true })
      const mobileNav = page.locator('#mobile-nav')
      await mobileNav.getByRole('link', { name: 'Pacotes', exact: true }).click()
      await expect(page).toHaveURL(/\/sites\/?$/)
      await toggle.click({ force: true })
      await mobileNav.getByRole('link', { name: 'Portfólio', exact: true }).click()
    } else {
      const nav = page.locator('nav[aria-label="Início"]')
      await nav.getByRole('link', { name: 'Pacotes', exact: true }).click()
      await expect(page).toHaveURL(/\/sites\/?$/)
      await nav.getByRole('link', { name: 'Portfólio', exact: true }).click()
    }
    await expect(page).toHaveURL(/\/portfolio\/?$/)
  })

  test('EN language switch shows English nav', async ({ page }) => {
    await page.goto('/en/')
    await expect(page.getByRole('link', { name: 'Packages', exact: true })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Portfolio', exact: true })).toBeVisible()
  })

  test('ES language switch shows Spanish nav', async ({ page }) => {
    await page.goto('/es/')
    await expect(page.getByRole('link', { name: 'Paquetes', exact: true })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Portafolio', exact: true })).toBeVisible()
  })
})

test.describe('Hub a11y', () => {
  for (const route of ['/', '/en/', '/es/', '/sites/', '/portfolio/', '/faq/']) {
    test(`${route} passes axe`, async ({ page }) => {
      await page.goto(route)
      const results = await new AxeBuilder({ page })
        .exclude('iframe')
        .analyze()
      expect(results.violations).toEqual([])
    })
  }
})

test.describe('Responsiveness', () => {
  test('mobile menu opens at 390px', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto('/')
    const toggle = page.locator('.nav-toggle')
    await expect(toggle).toBeVisible()
    await toggle.click({ force: true })
    await expect(page.locator('#mobile-nav')).toHaveClass(/is-open/)
  })

  test('portfolio filter works on tablet (PT)', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 })
    await page.goto('/portfolio/')
    await page.getByRole('button', { name: 'Saúde' }).click()
    await expect(page.locator('.demo-card').first()).toBeVisible()
  })

  test('portfolio filter works on tablet (EN)', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 })
    await page.goto('/en/portfolio/')
    await page.getByRole('button', { name: 'Health' }).click()
    await expect(page.locator('.demo-card').first()).toBeVisible()
  })

  test('hero shows two columns at 1280px', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 })
    await page.goto('/')
    await expect(page.locator('.hero__grid')).toBeVisible()
    await expect(page.locator('.hero-visual')).toBeVisible()
    await expect(page.locator('.browser-preview')).toBeVisible()
  })
})

test.describe('Assets and links', () => {
  test('images load on home', async ({ page }) => {
    await page.goto('/')
    const images = page.locator('img[src]')
    const count = await images.count()
    expect(count).toBeGreaterThan(0)
    for (let i = 0; i < count; i++) {
      const src = await images.nth(i).getAttribute('src')
      if (!src || src.startsWith('data:')) continue
      const response = await page.request.get(new URL(src!, page.url()).href)
      expect(response.status(), `Image failed: ${src}`).toBeLessThan(400)
    }
  })

  test('internal links resolve', async ({ page }) => {
    await page.goto('/')
    const links = page.locator('a[href^="/"]')
    const hrefs = new Set<string>()
    const count = await links.count()
    for (let i = 0; i < count; i++) {
      const href = await links.nth(i).getAttribute('href')
      if (href) hrefs.add(href.split('#')[0] || href)
    }
    for (const href of hrefs) {
      if (!href || href === '/') continue
      const response = await page.request.get(href)
      expect(response.status(), `Link failed: ${href}`).toBeLessThan(400)
    }
  })

  test('whatsapp links use wa.me', async ({ page }) => {
    await page.goto('/sites/')
    const waLinks = page.locator('a[href*="wa.me"]')
    await expect(waLinks.first()).toBeAttached()
    const href = await waLinks.first().getAttribute('href')
    expect(href).toContain('5551991213724')
  })

  test('favicon and og-image resolve', async ({ page, request }) => {
    await page.goto('/')
    const favicon = await request.get('/favicon.ico')
    expect(favicon.status()).toBeLessThan(400)
    const ogImage = await request.get('/assets/img/og-image.png')
    expect(ogImage.status()).toBeLessThan(400)
    expect(ogImage.headers()['content-type']).toContain('image')
  })
})
