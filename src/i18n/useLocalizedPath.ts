import { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import type { Locale } from './types'
import { LOCALES, localizedPath } from './types'

const LOCALE_PATTERN = /^\/(en|es)(\/|$)/

export function detectLocaleFromPath(pathname: string): Locale {
  const match = pathname.match(LOCALE_PATTERN)
  if (match?.[1] === 'en') return 'en'
  if (match?.[1] === 'es') return 'es'
  return 'pt'
}

export function stripLocalePrefix(pathname: string): string {
  const stripped = pathname.replace(LOCALE_PATTERN, '/')
  if (stripped === '') return '/'
  return stripped.endsWith('/') ? stripped : `${stripped}/`
}

export function switchLocalePath(pathname: string, nextLocale: Locale): string {
  const base = stripLocalePrefix(pathname)
  return localizedPath(base, nextLocale)
}

export function useLocalizedPath() {
  const location = useLocation()
  const navigate = useNavigate()

  const locale = useMemo(
    () => detectLocaleFromPath(location.pathname),
    [location.pathname],
  )

  const pathFor = (path: string) => localizedPath(path, locale)

  const switchLocale = (nextLocale: Locale) => {
    const next = switchLocalePath(location.pathname, nextLocale)
    navigate(`${next}${location.search}${location.hash}`)
  }

  return { locale, pathFor, switchLocale, LOCALES }
}

export { LOCALES }
