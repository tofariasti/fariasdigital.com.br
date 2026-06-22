import { describe, expect, it } from 'vitest'
import { hubConfig } from '../data/hubConfig'
import {
  demoSlugFromUrl,
  filterHeroDemos,
  pickRandomDemoIndex,
} from '../utils/heroDemo'

const HERO_FEATURED_URLS = [
  'https://tofariasti.github.io/landing-barbearia/',
  'https://tofariasti.github.io/bazar_do_alemao/',
  'https://tofariasti.github.io/performance-hyosung/',
  'https://tofariasti.github.io/landing-farmacia/',
  'https://tofariasti.github.io/landing-nutricionista/',
  'https://tofariasti.github.io/landing-classificados/',
  'https://tofariasti.github.io/ecommerce/',
  'https://tofariasti.github.io/catalogo-digital/',
  'https://tofariasti.github.io/cardapio-digital/',
  'https://tofariasti.github.io/landing-lutas/',
  'https://tofariasti.github.io/supermercado-landing/',
  'https://tofariasti.github.io/landing-dentista/',
]

describe('heroDemo', () => {
  it('extracts slug from demo URL', () => {
    expect(demoSlugFromUrl('https://tofariasti.github.io/landing-barbearia/')).toBe('landing-barbearia')
    expect(demoSlugFromUrl('https://tofariasti.github.io/bazar_do_alemao/')).toBe('bazar_do_alemao')
  })

  it('picks a different random index when possible', () => {
    for (let i = 0; i < 20; i++) {
      expect(pickRandomDemoIndex(3, 12)).not.toBe(3)
    }
    expect(pickRandomDemoIndex(0, 1)).toBe(0)
  })

  it('has the curated hero featured demos', () => {
    const heroDemos = filterHeroDemos(hubConfig.demos)
    expect(heroDemos).toHaveLength(12)
    expect(heroDemos.map((demo) => demo.url).sort()).toEqual([...HERO_FEATURED_URLS].sort())
  })
})
