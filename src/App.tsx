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

function AppRoutes() {
  useAnalytics()

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sites" element={<Navigate to="/sites/" replace />} />
      <Route path="/sites/" element={<SitesPage />} />
      <Route path="/portfolio" element={<Navigate to="/portfolio/" replace />} />
      <Route path="/portfolio/" element={<PortfolioPage />} />
      <Route path="/faq" element={<Navigate to="/faq/" replace />} />
      <Route path="/faq/" element={<FaqPage />} />
      <Route path="/por-que-site" element={<Navigate to="/por-que-site/" replace />} />
      <Route path="/por-que-site/" element={<PorQueSitePage />} />
      <Route path="/drone" element={<Navigate to="/drone/" replace />} />
      <Route path="/drone/" element={<DronePage />} />
      <Route path="/sobre" element={<Navigate to="/sobre/" replace />} />
      <Route path="/sobre/" element={<SobrePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <SiteLayout>
        <AppRoutes />
      </SiteLayout>
    </BrowserRouter>
  )
}
