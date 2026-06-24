import { Link } from 'react-router-dom'
import { useHubConfig } from '../../i18n/useHubConfig'
import { useLocale } from '../../i18n/LocaleContext'
import { uiCopy } from '../../data/uiCopy'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import { AnimatedSection } from '../ui/AnimatedSection'

export function Footer() {
  const config = useHubConfig()
  const { t, pathFor } = useLocale()
  const year = new Date().getFullYear()
  const legal = [
    config.empresaCnpj ? `CNPJ ${config.empresaCnpj}` : '',
    config.empresaEndereco,
  ]
    .filter(Boolean)
    .join(' · ')

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <AnimatedSection>
            <p className="footer__brand">
              {config.marca} · {config.dominioHost}
            </p>
            <p>{t(uiCopy.footer.tagline)}</p>
            <p style={{ marginTop: '0.75rem' }}>{t(uiCopy.footer.meiNf)}</p>
          </AnimatedSection>
          <AnimatedSection delay={1}>
            <p className="footer__title">{t(uiCopy.footer.nav)}</p>
            <ul className="footer__links">
              <li><Link to={pathFor('/pacotes/')}>{t(uiCopy.nav.packagesFull)}</Link></li>
              <li><Link to={pathFor('/portfolio/')}>{t(uiCopy.nav.portfolio)}</Link></li>
              <li><Link to={pathFor('/por-que-site/')}>{t(uiCopy.nav.whySite)}</Link></li>
              <li><Link to={pathFor('/faq/')}>{t(uiCopy.nav.faqFull)}</Link></li>
              <li><Link to={pathFor('/computadores/')}>{t(uiCopy.nav.computers)}</Link></li>
              <li><Link to={pathFor('/sobre/')}>{t(uiCopy.nav.about)}</Link></li>
            </ul>
          </AnimatedSection>
          <AnimatedSection delay={2}>
            <p className="footer__title">{t(uiCopy.footer.contact)}</p>
            <ul className="footer__links">
              <li>
                <a href={config.dominio}>{config.dominioHost}</a>
              </li>
              <li>
                <a href={buildWhatsAppUrl('geral')} target="_blank" rel="noopener noreferrer">
                  WhatsApp {config.whatsappExibicao}
                </a>
              </li>
              <li>
                <a href={`mailto:${config.email}`}>{config.email}</a>
              </li>
              <li>
                <a href={config.links.techdrone360} target="_blank" rel="noopener noreferrer">
                  TechDrone360
                </a>
              </li>
              <li>
                <a href={config.links.portfolio} target="_blank" rel="noopener noreferrer">
                  {t(uiCopy.common.technicalPortfolio)}
                </a>
              </li>
            </ul>
          </AnimatedSection>
        </div>
        <div className="footer__bottom">
          <span>© {year} {config.nome}. {t(uiCopy.footer.rights)}</span>
          <span>{legal}</span>
        </div>
      </div>
    </footer>
  )
}
