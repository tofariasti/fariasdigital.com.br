import type { Demo } from '../data/types'
import { demoSlugFromUrl, isLandingAdminDemo } from './heroDemo'

export const PORTFOLIO_PANEL_PARAM = 'painel'

/** Business-relevant demos first — proof of the R$ 590 panel package. */
const PANEL_SHOWCASE_SLUGS = [
  'landing-nutricionista',
  'landing-otica',
  'landing-lavanderia',
  'landing-astrologo',
  'landing-horoscopo',
  'landing-numerologia',
] as const

export function filterLandingAdminDemos(demos: Demo[]): Demo[] {
  return demos.filter(isLandingAdminDemo)
}

export function sortPanelShowcaseDemos(demos: Demo[]): Demo[] {
  const order = new Map(PANEL_SHOWCASE_SLUGS.map((slug, index) => [slug, index]))

  return [...demos].sort((a, b) => {
    const aIndex = order.get(demoSlugFromUrl(a.url) as (typeof PANEL_SHOWCASE_SLUGS)[number])
    const bIndex = order.get(demoSlugFromUrl(b.url) as (typeof PANEL_SHOWCASE_SLUGS)[number])
    if (aIndex === undefined && bIndex === undefined) return 0
    if (aIndex === undefined) return 1
    if (bIndex === undefined) return -1
    return aIndex - bIndex
  })
}

export function panelShowcaseDemos(demos: Demo[]): Demo[] {
  return sortPanelShowcaseDemos(filterLandingAdminDemos(demos))
}

export function isPanelFilterActive(searchParams: URLSearchParams): boolean {
  return searchParams.get(PORTFOLIO_PANEL_PARAM) === '1'
}
