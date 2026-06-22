import { describe, expect, it } from 'vitest'
import { hubConfig } from '../data/hubConfig'

describe('hubConfig', () => {
  it('has valid demo URLs', () => {
    hubConfig.demos.forEach((demo) => {
      expect(demo.url).toMatch(/^https:\/\//)
      expect(demo.titulo.length).toBeGreaterThan(0)
      expect(demo.segmento.length).toBeGreaterThan(0)
    })
  })

  it('has packages with prices', () => {
    expect(hubConfig.pacotesWeb.length).toBeGreaterThan(0)
    hubConfig.pacotesWeb.forEach((pkg) => {
      expect(pkg.preco.length).toBeGreaterThan(0)
      expect(pkg.inclui.length).toBeGreaterThan(0)
    })
  })

  it('has SEO pages for all routes', () => {
    const keys = ['home', 'pacotes', 'portfolio', 'faq', 'por-que-site', 'drone', 'sobre'] as const
    keys.forEach((key) => {
      expect(hubConfig.seo.paginas[key].title).toBeTruthy()
      expect(hubConfig.seo.paginas[key].description).toBeTruthy()
    })
  })
})
