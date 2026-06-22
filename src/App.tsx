import type { ReactElement } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/layout/SiteLayout'
import { HomePage } from './pages/HomePage'
import { SitesPage } from './pages/SitesPage'
import { PortfolioPage } from './pages/PortfolioPage'
import { FaqPage } from './pages/FaqPage'
import { PorQueSitePage } from './pages/PorQueSitePage'
import { DronePage } from './pages/DronePage'
import { SobrePage } from './pages/SobrePage'
import { useAnalytics } from './hooks/useAnalytics'
import { LocaleProvider } from './i18n/LocaleContext'

function routePath(prefix: string, path: string): string {
  if (path === '/') return prefix ? `${prefix}/` : '/'
  const segment = path.startsWith('/') ? path.slice(1) : path
  return `${prefix}/${segment}`
}

function localeRoutes(prefix: string): ReactElement[] {
  const key = prefix ? prefix.slice(1) : 'pt'
  const p = (path: string) => routePath(prefix, path)

  return [
    <Route key={`${key}-home`} path={p('/')} element={<HomePage />} />,
    <Route key={`${key}-pacotes`} path={p('/pacotes')} element={<Navigate to={p('/pacotes/')} replace />} />,
    <Route key={`${key}-pacotes-index`} path={p('/pacotes/')} element={<SitesPage />} />,
    <Route key={`${key}-sites-legacy`} path={p('/sites')} element={<Navigate to={p('/pacotes/')} replace />} />,
    <Route key={`${key}-sites-legacy-index`} path={p('/sites/')} element={<Navigate to={p('/pacotes/')} replace />} />,
    <Route key={`${key}-portfolio`} path={p('/portfolio')} element={<Navigate to={p('/portfolio/')} replace />} />,
    <Route key={`${key}-portfolio-index`} path={p('/portfolio/')} element={<PortfolioPage />} />,
    <Route key={`${key}-faq`} path={p('/faq')} element={<Navigate to={p('/faq/')} replace />} />,
    <Route key={`${key}-faq-index`} path={p('/faq/')} element={<FaqPage />} />,
    <Route key={`${key}-por-que-site`} path={p('/por-que-site')} element={<Navigate to={p('/por-que-site/')} replace />} />,
    <Route key={`${key}-por-que-site-index`} path={p('/por-que-site/')} element={<PorQueSitePage />} />,
    <Route key={`${key}-drone`} path={p('/drone')} element={<Navigate to={p('/drone/')} replace />} />,
    <Route key={`${key}-drone-index`} path={p('/drone/')} element={<DronePage />} />,
    <Route key={`${key}-sobre`} path={p('/sobre')} element={<Navigate to={p('/sobre/')} replace />} />,
    <Route key={`${key}-sobre-index`} path={p('/sobre/')} element={<SobrePage />} />,
  ]
}

function AppRoutes() {
  useAnalytics()

  return (
    <Routes>
      <Route path="/pt/*" element={<Navigate to="/" replace />} />
      {localeRoutes('')}
      {localeRoutes('/en')}
      {localeRoutes('/es')}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <LocaleProvider>
        <SiteLayout>
          <AppRoutes />
        </SiteLayout>
      </LocaleProvider>
    </BrowserRouter>
  )
}
