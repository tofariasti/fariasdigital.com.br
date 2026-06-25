import { Link } from 'react-router-dom'
import { useHubConfig } from '../../i18n/useHubConfig'
import { useLocale } from '../../i18n/LocaleContext'
import { uiCopy } from '../../data/uiCopy'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import { AnimatedSection } from '../ui/AnimatedSection'
import { ServiceIcon } from '../ui/ServiceIcon'
import { WhatsAppButton } from '../ui/WhatsAppButton'

function LearnMoreLink({ href, to }: { href?: string; to?: string }) {
  const { t } = useLocale()
  const label = (
    <>
      {t(uiCopy.common.learnMore)}
      <span className="btn__arrow" aria-hidden="true">
        {' '}
        →
      </span>
    </>
  )

  if (to) {
    return (
      <Link to={to} className="mini-service__link">
        {label}
      </Link>
    )
  }

  return (
    <a href={href} className="mini-service__link" target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  )
}

export function MiniServices() {
  const config = useHubConfig()
  const { t, pathFor } = useLocale()

  return (
    <div className="mini-services mini-services--grid">
      {config.servicos.map((svc, i) => {
        let link: React.ReactNode = null
        if (svc.externo && svc.href) {
          link = <LearnMoreLink href={svc.href} />
        } else if (svc.wa) {
          link = <LearnMoreLink href={buildWhatsAppUrl(svc.wa)} />
        } else if (svc.href) {
          link = svc.externo ? (
            <LearnMoreLink href={svc.href} />
          ) : (
            <LearnMoreLink to={pathFor(svc.href)} />
          )
        }

        return (
          <AnimatedSection key={svc.id} delay={(i % 3) + 1} className="mini-service">
            <div className="mini-service__row">
              <div className="mini-service__icon" aria-hidden="true">
                <ServiceIcon id={svc.id} />
              </div>
              <div className="mini-service__content">
                <h3>{svc.titulo}</h3>
                <p>{svc.descricao}</p>
                {svc.preco && <span className="mini-service__price">{svc.preco}</span>}
                {link}
              </div>
              <span className="mini-service__chevron" aria-hidden="true">›</span>
            </div>
          </AnimatedSection>
        )
      })}
      <AnimatedSection delay={3} className="mini-services__rocket">
        <div className="mini-services__rocket-inner">
          <span className="mini-services__rocket-icon" aria-hidden="true">🚀</span>
          <div>
            <h3>{t(uiCopy.home.servicosRocketTitle)}</h3>
            <p>{t(uiCopy.home.servicosRocketText)}</p>
          </div>
          <WhatsAppButton waKey="geral" className="btn btn--primary">
            {t(uiCopy.home.servicosRocketCta)}
            <span className="btn__arrow" aria-hidden="true">→</span>
          </WhatsAppButton>
        </div>
      </AnimatedSection>
    </div>
  )
}
