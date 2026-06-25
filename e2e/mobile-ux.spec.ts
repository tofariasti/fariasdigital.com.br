import { test, expect } from '@playwright/test'

const MOBILE = { width: 390, height: 844 }
const TABLET = { width: 768, height: 1024 }

const KEY_ROUTES = ['/', '/pacotes/', '/portfolio/', '/faq/', '/sobre/']

async function assertNoHorizontalOverflow(page: import('@playwright/test').Page) {
  const overflow = await page.evaluate(() => {
    const doc = document.documentElement
    return doc.scrollWidth - doc.clientWidth
  })
  expect(overflow, 'horizontal scroll detected').toBeLessThanOrEqual(1)
}

async function assertMinTouchTarget(
  page: import('@playwright/test').Page,
  selector: string,
  minPx = 44,
) {
  const box = await page.locator(selector).first().boundingBox()
  expect(box, `${selector} not visible`).not.toBeNull()
  if (box) {
    expect(box.height, `${selector} height`).toBeGreaterThanOrEqual(minPx - 2)
    expect(box.width, `${selector} width`).toBeGreaterThanOrEqual(minPx - 2)
  }
}

test.describe('Mobile UX — 390px', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize(MOBILE)
  })

  for (const route of KEY_ROUTES) {
    test(`${route} loads without horizontal overflow`, async ({ page }) => {
      await page.goto(route, { waitUntil: 'domcontentloaded' })
      await expect(page.locator('header.site-header')).toBeVisible()
      await assertNoHorizontalOverflow(page)
    })
  }

  test('home — mobile nav pattern', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('.nav-toggle')).toBeVisible()
    await expect(page.locator('.site-header__nav .site-nav')).toBeHidden()
    await expect(page.locator('.site-header__whatsapp')).toBeHidden()
  })

  test('home — hero stacks vertically', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('.hero__title')).toBeVisible()
    await expect(page.locator('.hero-visual')).toBeVisible()

    const titleBox = await page.locator('.hero__title').boundingBox()
    const visualBox = await page.locator('.hero-visual').boundingBox()
    expect(titleBox).not.toBeNull()
    expect(visualBox).not.toBeNull()
    if (titleBox && visualBox) {
      expect(visualBox.y, 'preview should sit below title block').toBeGreaterThan(titleBox.y)
    }
  })

  test('home — CTA buttons full width', async ({ page }) => {
    await page.goto('/')
    const actions = page.locator('.hero__actions')
    await expect(actions).toBeVisible()
    const container = await actions.boundingBox()
    const primaryBtn = page.locator('.hero__actions .btn').first()
    const btnBox = await primaryBtn.boundingBox()
    expect(container).not.toBeNull()
    expect(btnBox).not.toBeNull()
    if (container && btnBox) {
      expect(btnBox.width).toBeGreaterThanOrEqual(container.width * 0.95)
    }
  })

  test('home — mobile menu opens and navigates', async ({ page }) => {
    await page.goto('/')
    const toggle = page.locator('.nav-toggle')
    await toggle.evaluate((el) => (el as HTMLButtonElement).click())
    await expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = page.locator('#mobile-nav')
    await expect(mobileNav).toHaveClass(/is-open/)
    await mobileNav.getByRole('link', { name: 'Pacotes', exact: true }).click()
    await expect(page).toHaveURL(/\/pacotes\/?$/)
  })

  test('home — touch targets (nav toggle, wa float)', async ({ page }) => {
    await page.goto('/')
    await assertMinTouchTarget(page, '.nav-toggle')
    await assertMinTouchTarget(page, '.wa-float')
  })

  test('home — service cards readable', async ({ page }) => {
    await page.goto('/')
    await page.locator('#servicos').scrollIntoViewIfNeeded()
    const cards = page.locator('.mini-service')
    await expect(cards.first()).toBeVisible()
    const count = await cards.count()
    expect(count).toBeGreaterThanOrEqual(4)
    await expect(page.locator('.mini-service__chevron').first()).toBeVisible()
    for (let i = 0; i < Math.min(count, 3); i++) {
      const card = cards.nth(i)
      const box = await card.boundingBox()
      expect(box?.width ?? 0).toBeLessThanOrEqual(MOBILE.width)
    }
  })

  test('home — redesign sections on mobile', async ({ page }) => {
    await page.goto('/')
    await page.locator('#modelos').scrollIntoViewIfNeeded()
    await expect(page.locator('.template-card').first()).toBeVisible()
    await page.locator('#segmentos').scrollIntoViewIfNeeded()
    await expect(page.locator('.industries-grid')).toBeVisible()
    await page.locator('#depoimentos').scrollIntoViewIfNeeded()
    await expect(page.locator('.testimonial-card').first()).toBeVisible()
    await assertNoHorizontalOverflow(page)
  })

  test('portfolio — filter bar scrolls horizontally', async ({ page }) => {
    await page.goto('/portfolio/')
    const filterBar = page.locator('.filter-bar')
    await expect(filterBar).toBeVisible()
    const scrollable = await filterBar.evaluate((el) => el.scrollWidth > el.clientWidth)
    expect(scrollable, 'filter chips should scroll on narrow screens').toBe(true)
    await assertNoHorizontalOverflow(page)
  })

  test('pacotes — package cards stack', async ({ page }) => {
    await page.goto('/pacotes/')
    const cards = page.locator('.package-card')
    await expect(cards.first()).toBeVisible()
    await cards.nth(1).scrollIntoViewIfNeeded()
    const first = await cards.nth(0).boundingBox()
    const second = await cards.nth(1).boundingBox()
    expect(first).not.toBeNull()
    expect(second).not.toBeNull()
    if (first && second) {
      expect(second.y).toBeGreaterThan(first.y + first.height - 80)
    }
  })
})

test.describe('Tablet UX — 768px', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize(TABLET)
  })

  test('home — no horizontal overflow', async ({ page }) => {
    await page.goto('/')
    await assertNoHorizontalOverflow(page)
  })

  test('home — desktop nav visible at 768px', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('.site-header__nav .site-nav')).toBeVisible()
    await expect(page.locator('.nav-toggle')).toBeHidden()
  })

  test('portfolio — filter and grid usable', async ({ page }) => {
    await page.goto('/portfolio/')
    await page.getByRole('tab', { name: 'Saúde' }).click()
    await expect(page.locator('.demo-card').first()).toBeVisible()
    await assertNoHorizontalOverflow(page)
  })
})
