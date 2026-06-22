import { describe, expect, it } from 'vitest'
import { buildJsonLd, getPageMeta } from '../utils/seo'

describe('seo utils', () => {
  it('returns canonical URLs with trailing slash for subpages', () => {
    expect(getPageMeta('pacotes', 'pt').canonical).toBe('https://fariasdigital.com.br/pacotes/')
    expect(getPageMeta('home', 'pt').canonical).toBe('https://fariasdigital.com.br/')
    expect(getPageMeta('pacotes', 'en').canonical).toBe('https://fariasdigital.com.br/en/pacotes/')
  })

  it('builds home JSON-LD graph', () => {
    const schemas = buildJsonLd('home', 'pt')
    expect(schemas.length).toBe(1)
    expect(JSON.stringify(schemas[0])).toContain('LocalBusiness')
  })

  it('builds FAQ JSON-LD', () => {
    const schemas = buildJsonLd('faq', 'pt')
    expect(JSON.stringify(schemas)).toContain('FAQPage')
    expect(JSON.stringify(schemas)).toContain('BreadcrumbList')
  })
})
