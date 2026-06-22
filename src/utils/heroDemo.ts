import type { Demo } from '../data/types'

export const HERO_DEMO_ROTATE_MS = 6000

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
