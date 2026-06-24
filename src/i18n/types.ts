export type Locale = 'pt' | 'en' | 'es'

export const LOCALES: Locale[] = ['pt', 'en', 'es']

export const DEFAULT_LOCALE: Locale = 'pt'

export type Localized<T> = Record<Locale, T>

export function L<T>(pt: T, en: T, es: T): Localized<T> {
  return { pt, en, es }
}

export function htmlLang(locale: Locale): string {
  if (locale === 'pt') return 'pt-BR'
  if (locale === 'es') return 'es'
  return 'en'
}

export function ogLocale(locale: Locale): string {
  if (locale === 'pt') return 'pt_BR'
  if (locale === 'es') return 'es_ES'
  return 'en_US'
}

export function hreflang(locale: Locale): string {
  if (locale === 'pt') return 'pt-BR'
  return locale
}

export const LOCALE_PREFIX: Record<Locale, string> = {
  pt: '',
  en: '/en',
  es: '/es',
}

export function localizedPath(path: string, locale: Locale): string {
  const raw = path.startsWith('/') ? path : `/${path}`
  const hashIndex = raw.indexOf('#')
  const pathPart = hashIndex >= 0 ? raw.slice(0, hashIndex) : raw
  const hashPart = hashIndex >= 0 ? raw.slice(hashIndex) : ''

  const prefix = LOCALE_PREFIX[locale]

  let normalizedPath: string
  if (pathPart === '/' || pathPart === '') {
    normalizedPath = prefix ? `${prefix}/` : '/'
  } else if (prefix === '') {
    normalizedPath = pathPart.endsWith('/') ? pathPart : `${pathPart}/`
  } else {
    const segment = pathPart.startsWith('/') ? pathPart : `/${pathPart}`
    normalizedPath = `${prefix}${segment}`.replace(/\/+/g, '/')
    if (!normalizedPath.endsWith('/')) normalizedPath += '/'
  }

  return `${normalizedPath}${hashPart}`
}
