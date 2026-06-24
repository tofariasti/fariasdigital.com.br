import { describe, expect, it } from 'vitest'
import type { Demo } from '../data/types'
import {
  filterLandingAdminDemos,
  panelShowcaseDemos,
  sortPanelShowcaseDemos,
} from '../utils/portfolioPanel'

const adminDemo = (slug: string, titulo: string): Demo => ({
  titulo,
  segmento: 'Saúde',
  url: `https://tofariasti.github.io/${slug}/`,
  descricao: 'Demo com painel.',
  badge: 'Landing + Admin',
})

const landingDemo: Demo = {
  titulo: 'Pet shop',
  segmento: 'Serviços',
  url: 'https://tofariasti.github.io/amo-patas/',
  descricao: 'Sem painel.',
}

describe('portfolioPanel', () => {
  it('filters demos with Landing + Admin badge', () => {
    const demos = [landingDemo, adminDemo('landing-nutricionista', 'Nutricionista')]
    expect(filterLandingAdminDemos(demos)).toHaveLength(1)
    expect(filterLandingAdminDemos(demos)[0]?.titulo).toBe('Nutricionista')
  })

  it('orders showcase demos with business examples first', () => {
    const demos = [
      adminDemo('landing-horoscopo', 'Horóscopo'),
      adminDemo('landing-otica', 'Ótica'),
      adminDemo('landing-nutricionista', 'Nutricionista'),
    ]
    const sorted = sortPanelShowcaseDemos(demos).map((d) => d.titulo)
    expect(sorted).toEqual(['Nutricionista', 'Ótica', 'Horóscopo'])
  })

  it('returns only admin demos in showcase order', () => {
    const demos = [landingDemo, adminDemo('landing-lavanderia', 'Lavanderia')]
    expect(panelShowcaseDemos(demos).map((d) => d.titulo)).toEqual(['Lavanderia'])
  })
})
