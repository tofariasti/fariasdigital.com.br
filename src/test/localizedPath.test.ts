import { describe, expect, it } from 'vitest'
import { localizedPath } from '../i18n/types'

describe('localizedPath', () => {
  it('keeps hash fragments without trailing slash', () => {
    expect(localizedPath('/#site-vs-instagram', 'pt')).toBe('/#site-vs-instagram')
    expect(localizedPath('/pacotes/#pacotes', 'pt')).toBe('/pacotes/#pacotes')
    expect(localizedPath('/#site-vs-instagram', 'en')).toBe('/en/#site-vs-instagram')
    expect(localizedPath('/pacotes/#pacotes', 'en')).toBe('/en/pacotes/#pacotes')
    expect(localizedPath('/pacotes/#pacotes', 'es')).toBe('/es/pacotes/#pacotes')
  })

  it('normalizes plain paths with trailing slash', () => {
    expect(localizedPath('/pacotes', 'pt')).toBe('/pacotes/')
    expect(localizedPath('/portfolio/', 'en')).toBe('/en/portfolio/')
    expect(localizedPath('/', 'pt')).toBe('/')
    expect(localizedPath('/', 'en')).toBe('/en/')
  })

  it('handles hash-only anchors on home', () => {
    expect(localizedPath('#pacotes', 'pt')).toBe('/#pacotes')
    expect(localizedPath('#pacotes', 'en')).toBe('/en/#pacotes')
  })
})
