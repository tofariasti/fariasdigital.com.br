import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { hubConfig } from '../data/hubConfig'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export function useAnalytics() {
  const location = useLocation()

  useEffect(() => {
    const id = hubConfig.googleAnalyticsId
    if (!id || window.gtag) return

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer ?? []
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args)
    }
    window.gtag('js', new Date())
    window.gtag('config', id)
  }, [])

  useEffect(() => {
    if (window.gtag && hubConfig.googleAnalyticsId) {
      window.gtag('config', hubConfig.googleAnalyticsId, {
        page_path: location.pathname + location.search + location.hash,
      })
    }
  }, [location])
}
