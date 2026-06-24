import { Link } from 'react-router-dom'
import { useHubConfig } from '../../i18n/useHubConfig'
import { useLocale } from '../../i18n/LocaleContext'
import { uiCopy } from '../../data/uiCopy'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import { AnimatedSection } from '../ui/AnimatedSection'
import type { IntentItem } from '../../data/types'

export function IntentGrid({ items }: { items?: IntentItem[] }) {
  const config = useHubConfig()
  const { t, pathFor } = useLocale()
  const intentItems = items ?? config.intentItems

  return (
    <div className="intent-grid">
      {intentItems.map((item, i) => {
        const linkText = item.externo ? t(uiCopy.common.learnMore) : t(uiCopy.common.seeOptions)
        const content = (
          <>
            <h3 className="intent-card__title">{item.titulo}</h3>
            <p className="intent-card__desc">{item.descricao}</p>
            <span className="intent-card__link">{linkText}</span>
          </>
        )

        if (item.externo && item.href) {
          return (
            <AnimatedSection key={item.titulo} delay={i + 1}>
              <a
                href={item.href}
                className="intent-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            </AnimatedSection>
          )
        }

        if (item.wa) {
          return (
            <AnimatedSection key={item.titulo} delay={i + 1}>
              <a
                href={buildWhatsAppUrl(item.wa)}
                className="intent-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            </AnimatedSection>
          )
        }

        const rawHref = item.href ?? item.anchor ?? '/pacotes/#pacotes'
        const href = rawHref.startsWith('http') ? rawHref : pathFor(rawHref)
        const isExternal = href.startsWith('http')
        return (
          <AnimatedSection key={item.titulo} delay={i + 1}>
            {isExternal ? (
              <a href={href} className="intent-card" target="_blank" rel="noopener noreferrer">
                {content}
              </a>
            ) : (
              <Link to={href} className="intent-card">
                {content}
              </Link>
            )}
          </AnimatedSection>
        )
      })}
    </div>
  )
}
