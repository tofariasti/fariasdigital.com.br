import { test, expect } from '@playwright/test'

const LIVE_URL = 'https://fariasdigital.com.br/'

const HERO_FEATURED_PATHS = [
  'landing-barbearia',
  'bazar_do_alemao',
  'performance-hyosung',
  'landing-farmacia',
  'landing-nutricionista',
  'landing-classificados',
  'ecommerce',
  'catalogo-digital',
  'cardapio-digital',
  'landing-lutas',
  'supermercado-landing',
  'landing-dentista',
]

test.describe('Live production — hero demo rotation', () => {
  test.use({ baseURL: LIVE_URL })

  test('home preview uses curated demos and rotates', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 })
    await page.goto('/', { waitUntil: 'domcontentloaded' })

    await expect(page.locator('header.site-header')).toBeVisible({ timeout: 15_000 })

    const iframe = page.locator('.browser-preview__screen iframe')
    await expect(iframe).toBeVisible({ timeout: 10_000 })

    const initialSrc = await iframe.getAttribute('src')
    expect(initialSrc).toMatch(/^https:\/\/tofariasti\.github\.io\//)
    expect(initialSrc).not.toContain('amo-patas')
    expect(HERO_FEATURED_PATHS.some((slug) => initialSrc!.includes(slug))).toBe(true)

    await expect(page.locator('.browser-preview__url')).toContainText('.demo · fariasdigital.com.br')

    await page.waitForTimeout(7000)

    await expect
      .poll(async () => iframe.getAttribute('src'), { timeout: 15_000 })
      .not.toBe(initialSrc)

    const nextSrc = await iframe.getAttribute('src')
    expect(nextSrc).toMatch(/^https:\/\/tofariasti\.github\.io\//)
    expect(HERO_FEATURED_PATHS.some((slug) => nextSrc!.includes(slug))).toBe(true)
  })
})
