import type { Demo } from '../data/types'

export const HERO_DEMO_ROTATE_MS = 6000

export type HeroDemoKind = 'landing' | 'ecommerce' | 'catalog' | 'portal' | 'landing-admin'

export type HeroDemoChipVariant = 'type' | 'whatsapp'

export interface HeroDemoChip {
  label: string
  variant: HeroDemoChipVariant
}

export interface HeroDemoTypeLabels {
  landing: string
  ecommerce: string
  catalog: string
  portal: string
  landingAdmin: string
  leadsWhatsApp: string
}

export function demoSlugFromUrl(url: string): string {
  const pathname = new URL(url).pathname.replace(/^\/|\/$/g, '')
  return pathname || 'demo'
}

export function pickRandomDemoIndex(current: number, length: number): number {
  if (length <= 1) return 0
  let next = Math.floor(Math.random() * length)
  while (next === current) {
    next = Math.floor(Math.random() * length)
  }
  return next
}

export function filterHeroDemos(demos: Demo[]): Demo[] {
  return demos.filter((demo) => demo.heroFeatured)
}

export function inferDemoKind(demo: Demo): HeroDemoKind {
  if (demo.badge?.toLowerCase().includes('admin')) return 'landing-admin'

  const slug = demoSlugFromUrl(demo.url)
  if (slug === 'ecommerce') return 'ecommerce'
  if (slug === 'catalogo-digital' || slug === 'cardapio-digital') return 'catalog'
  if (slug === 'landing-classificados') return 'portal'
  return 'landing'
}

export function getDemoTypeLabel(demo: Demo, labels: HeroDemoTypeLabels): string {
  const kind = inferDemoKind(demo)
  switch (kind) {
    case 'ecommerce':
      return labels.ecommerce
    case 'catalog':
      return labels.catalog
    case 'portal':
      return labels.portal
    case 'landing-admin':
      return labels.landingAdmin
    default:
      return labels.landing
  }
}

export function getHeroDemoChips(demo: Demo, labels: HeroDemoTypeLabels): HeroDemoChip[] {
  return [
    { label: getDemoTypeLabel(demo, labels), variant: 'type' },
    { label: labels.leadsWhatsApp, variant: 'whatsapp' },
  ]
}
