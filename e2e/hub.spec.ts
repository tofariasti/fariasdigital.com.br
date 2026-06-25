import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

async function expectHubPage(page: import('@playwright/test').Page, route: string) {
  await page.goto(route, { waitUntil: 'domcontentloaded' })
  await expect(page.locator('header.site-header')).toBeVisible({ timeout: 15_000 })
  await expect(page.locator('main')).toBeVisible()
}

const ROUTES_PT = ['/', '/pacotes/', '/portfolio/', '/faq/', '/por-que-site/', '/drone/', '/computadores/', '/sobre/']
const ROUTES_EN = ROUTES_PT.map((r) => (r === '/' ? '/en/' : `/en${r}`))
const ROUTES_ES = ROUTES_PT.map((r) => (r === '/' ? '/es/' : `/es${r}`))

test.describe('Hub navigation', () => {
  for (const route of ROUTES_PT) {
    test(`loads ${route}`, async ({ page }) => {
      await expectHubPage(page, route)
    })
  }

  for (const route of ROUTES_EN) {
    test(`loads EN ${route}`, async ({ page }) => {
      await expectHubPage(page, route)
    })
  }

  for (const route of ROUTES_ES) {
    test(`loads ES ${route}`, async ({ page }) => {
      await expectHubPage(page, route)
    })
  }

  test('legacy /sites/ redirects to /pacotes/', async ({ page }) => {
    await page.goto('/sites/')
    await expect(page).toHaveURL(/\/pacotes\/?$/)
    await expect(page.locator('main')).toBeVisible()
  })

  test('header navigation works (PT)', async ({ page }) => {
    await page.goto('/')
    const toggle = page.locator('.nav-toggle')
    if (await toggle.isVisible()) {
      await toggle.click({ force: true })
      const mobileNav = page.locator('#mobile-nav')
      await mobileNav.getByRole('link', { name: 'Pacotes', exact: true }).click()
      await expect(page).toHaveURL(/\/pacotes\/?$/)
      await toggle.click({ force: true })
      await mobileNav.getByRole('link', { name: 'Portfólio', exact: true }).click()
    } else {
      const nav = page.locator('nav[aria-label="Início"]')
      await nav.getByRole('link', { name: 'Pacotes', exact: true }).click()
      await expect(page).toHaveURL(/\/pacotes\/?$/)
      await nav.getByRole('link', { name: 'Portfólio', exact: true }).click()
    }
    await expect(page).toHaveURL(/\/portfolio\/?$/)
  })

  test('EN language switch shows English nav', async ({ page }) => {
    await expectHubPage(page, '/en/')
    const toggle = page.locator('.nav-toggle')
    if (await toggle.isVisible()) {
      await toggle.evaluate((el) => (el as HTMLButtonElement).click())
      await expect(page.locator('#mobile-nav').getByRole('link', { name: 'Packages', exact: true })).toBeVisible()
    } else {
      const nav = page.locator('header.site-header nav.site-header__nav')
      await expect(nav.getByRole('link', { name: 'Packages', exact: true })).toBeVisible()
      await expect(nav.getByRole('link', { name: 'Portfolio', exact: true })).toBeVisible()
    }
  })

  test('ES language switch shows Spanish nav', async ({ page }) => {
    await expectHubPage(page, '/es/')
    const toggle = page.locator('.nav-toggle')
    if (await toggle.isVisible()) {
      await toggle.evaluate((el) => (el as HTMLButtonElement).click())
      await expect(page.locator('#mobile-nav').getByRole('link', { name: 'Paquetes', exact: true })).toBeVisible()
    } else {
      const nav = page.locator('header.site-header nav.site-header__nav')
      await expect(nav.getByRole('link', { name: 'Paquetes', exact: true })).toBeVisible()
      await expect(nav.getByRole('link', { name: 'Portafolio', exact: true })).toBeVisible()
    }
  })
})

test.describe('Hub a11y', () => {
  for (const route of ['/', '/en/', '/es/', '/pacotes/', '/portfolio/', '/faq/']) {
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
    await expectHubPage(page, '/')
    const toggle = page.locator('.nav-toggle')
    await expect(toggle).toBeVisible()
    await toggle.evaluate((el) => (el as HTMLButtonElement).click())
    await expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await expect(page.locator('#mobile-nav')).toHaveClass(/is-open/)
  })

  test('portfolio filter works on tablet (PT)', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 })
    await page.goto('/portfolio/')
    await page.getByRole('tab', { name: 'Saúde' }).click()
    await expect(page).toHaveURL(/segmento=saude/)
    await expect(page.locator('.demo-card').first()).toBeVisible()
    await expect(page.locator('.filter-meta__segment')).toHaveText('· Saúde')
  })

  test('portfolio opens filtered from ?segmento= query (PT)', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 })
    await page.goto('/portfolio/?segmento=automotivo')
    await expect(page.getByRole('tab', { name: 'Automotivo' })).toHaveAttribute('aria-selected', 'true')
    await expect(page.locator('.filter-meta__segment')).toHaveText('· Automotivo')
    await expect(page.locator('#demos-root .demo-card')).toHaveCount(6)
  })

  test('portfolio filter works on tablet (EN)', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 })
    await page.goto('/en/portfolio/')
    await page.getByRole('tab', { name: 'Health' }).click()
    await expect(page).toHaveURL(/segmento=saude/)
    await expect(page.locator('.demo-card').first()).toBeVisible()
    await expect(page.locator('.filter-meta__segment')).toHaveText('· Health')
  })

  test('portfolio opens filtered from ?segmento= query (EN)', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 })
    await page.goto('/en/portfolio/?segmento=saude')
    await expect(page.getByRole('tab', { name: 'Health' })).toHaveAttribute('aria-selected', 'true')
    await expect(page.locator('.filter-meta__segment')).toHaveText('· Health')
  })

  test('portfolio text search filters demos (PT)', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 })
    await page.goto('/portfolio/')
    const search = page.getByRole('searchbox', { name: 'Buscar modelos' })
    await search.fill('barbearia')
    await expect(page.locator('#demos-root .demo-card')).toHaveCount(1)
    await expect(page.locator('#demos-root .demo-card__title')).toHaveText('Barbearia')
    await expect(page.locator('.filter-meta__query')).toHaveText('· “barbearia”')
  })

  test('portfolio text search combines with segment filter (PT)', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 })
    await page.goto('/portfolio/?segmento=saude')
    const search = page.getByRole('searchbox', { name: 'Buscar modelos' })
    await search.fill('barbearia')
    await expect(page.locator('.filter-empty')).toBeVisible()
    await expect(page.locator('#demos-root .demo-card')).toHaveCount(0)
  })

  test('portfolio highlights Landing + Painel demos (PT)', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 })
    await page.goto('/portfolio/')
    await expect(page.locator('#painel-demos')).toBeVisible()
    await expect(page.locator('#painel-demos .demo-card--admin').first()).toBeVisible()
    await expect(page.locator('#painel-demos .demo-card__title').first()).toHaveText(/Nutricionista|Ótica/)

    await page.getByRole('tab', { name: 'Landing + Painel' }).click()
    await expect(page).toHaveURL(/painel=1/)
    await expect(page.getByRole('tab', { name: 'Landing + Painel' })).toHaveAttribute('aria-selected', 'true')
    await expect(page.locator('#demos-root .demo-card--admin')).toHaveCount(6)
    await expect(page.locator('#demos-root .demo-card__badge--admin').first()).toBeVisible()
  })

  test('hero shows two columns at 1280px', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 })
    await page.goto('/')
    await expect(page.locator('.hero__grid')).toBeVisible()
    await expect(page.locator('.hero-visual')).toBeVisible()
    await expect(page.locator('.browser-preview')).toBeVisible()
    await expect(page.locator('.hero-trust-icons')).toBeVisible()
    await expect(page.locator('.stats-bar--hero')).toBeVisible()
  })

  test('homepage redesign sections are present', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 })
    await page.goto('/')
    await expect(page.locator('.stats-bar').first()).toBeVisible()
    await expect(page.locator('.template-card').first()).toBeVisible()
    await expect(page.locator('.industries-grid')).toBeVisible()
    await expect(page.locator('.testimonial-card').first()).toBeVisible()
    await expect(page.locator('#depoimentos')).toBeVisible()
    await expect(page.locator('.cta-band__benefits li')).toHaveCount(4)
  })

  test('hero preview rotates curated demos', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 })
    await page.goto('/')

    const iframe = page.locator('.browser-preview__screen iframe')
    await expect(iframe).toBeVisible()

    const initialSrc = await iframe.getAttribute('src')
    expect(initialSrc).toMatch(/^https:\/\/tofariasti\.github\.io\//)
    expect(initialSrc).not.toContain('amo-patas')

    const urlBar = page.locator('.browser-preview__url')
    await expect(urlBar).toContainText('.demo · fariasdigital.com.br')

    const caption = page.locator('.hero-demo-caption')
    await expect(caption).toBeVisible()
    await expect(caption.locator('.hero-demo-caption__title')).not.toBeEmpty()
    await expect(caption.locator('.hero-demo-caption__desc')).not.toBeEmpty()
    await expect(caption.locator('.hero-demo-caption__chip')).toHaveCount(2)

    await page.waitForTimeout(7000)

    await expect
      .poll(async () => iframe.getAttribute('src'), { timeout: 15_000 })
      .not.toBe(initialSrc)

    const nextSrc = await iframe.getAttribute('src')
    expect(nextSrc).toMatch(/^https:\/\/tofariasti\.github\.io\//)
    expect(nextSrc).not.toContain('amo-patas')
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
    await page.goto('/pacotes/')
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
