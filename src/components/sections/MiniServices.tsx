import { Link } from 'react-router-dom'
import { useHubConfig } from '../../i18n/useHubConfig'
import { useLocale } from '../../i18n/LocaleContext'
import { uiCopy } from '../../data/uiCopy'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import { AnimatedSection } from '../ui/AnimatedSection'
import { ServiceIcon } from '../ui/ServiceIcon'

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
  const { pathFor } = useLocale()

  return (
    <div className="mini-services">
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
            <div className="mini-service__icon" aria-hidden="true">
              <ServiceIcon id={svc.id} />
            </div>
            <h3>{svc.titulo}</h3>
            <p>{svc.descricao}</p>
            {svc.preco && <span className="mini-service__price">{svc.preco}</span>}
            {link}
          </AnimatedSection>
        )
      })}
    </div>
  )
}
