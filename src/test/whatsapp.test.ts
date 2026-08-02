import { describe, expect, it } from 'vitest'
import { buildWhatsAppUrl, buildDemoWhatsAppUrl } from '../utils/whatsapp'
import { hubConfig } from '../data/hubConfig'

describe('buildWhatsAppUrl', () => {
  it('builds geral URL with encoded message', () => {
    const url = buildWhatsAppUrl('geral')
    expect(url).toContain(`https://wa.me/${hubConfig.whatsappNumero}`)
    expect(url).toContain(encodeURIComponent(hubConfig.dominioHost))
  })

  it('builds pacote landing URL', () => {
    const url = buildWhatsAppUrl('pacoteLanding')
    expect(url).toContain('R%24%20450')
  })

  it('falls back to geral for unknown keys at runtime', () => {
    const url = buildWhatsAppUrl('site')
    expect(url).toContain('or%C3%A7amento')
  })
})

describe('buildDemoWhatsAppUrl', () => {
  it('includes demo title and domain', () => {
    const url = buildDemoWhatsAppUrl('Pet shop')
    expect(url).toContain('Pet%20shop')
    expect(url).toContain(hubConfig.dominioHost)
  })
})
