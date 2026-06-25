import type { ReactNode } from 'react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { WhatsAppButton } from '../ui/WhatsAppButton'
import { useLocale } from '../../i18n/LocaleContext'
import { uiCopy } from '../../data/uiCopy'
import type { WhatsAppKey } from '../../data/types'

interface CtaBandProps {
  title: string
  text: ReactNode
  waKey?: WhatsAppKey
  buttonLabel?: string
  showBenefits?: boolean
}

export function CtaBand({
  title,
  text,
  waKey = 'geral',
  buttonLabel,
  showBenefits = false,
}: CtaBandProps) {
  const { t } = useLocale()
  const benefits = uiCopy.ctaBand.benefits.map((b) => t(b))

  return (
    <section className="cta-band">
      <div className="container">
        <AnimatedSection>
          <h2 className="cta-band__title">{title}</h2>
        </AnimatedSection>
        <AnimatedSection delay={1}>
          <p className="cta-band__text">{text}</p>
        </AnimatedSection>
        {showBenefits && (
          <AnimatedSection delay={2}>
            <ul className="cta-band__benefits">
              {benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </AnimatedSection>
        )}
        <AnimatedSection delay={showBenefits ? 3 : 2}>
          <WhatsAppButton waKey={waKey} className="btn btn--whatsapp btn--lg cta-band__btn">
            {buttonLabel ?? t(uiCopy.cta.whatsapp)}
          </WhatsAppButton>
        </AnimatedSection>
      </div>
    </section>
  )
}

export function Marquee() {
  const { t } = useLocale()
  const marqueeItems = t(uiCopy.ctaBand.marquee)
  const items = [...marqueeItems, ...marqueeItems]

  return (
    <div className="marquee-wrap" aria-label={t(uiCopy.common.marqueeLabel)}>
      <div className="marquee">
        <div className="marquee__track">
          {items.map((item, i) => (
            <span key={`${item}-${i}`} className="marquee__item">
              <span>◆</span> {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function DiffGrid() {
  const { t } = useLocale()
  const diffItems = uiCopy.ctaBand.diffItems.map((item) => ({
    title: t(item.title),
    text: t(item.text),
  }))

  return (
    <div className="diff-grid">
      {diffItems.map((item, i) => (
        <AnimatedSection key={item.title} delay={i + 1} className="diff-card">
          <span className="diff-card__tag">{t(uiCopy.common.diffTag)}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </AnimatedSection>
      ))}
    </div>
  )
}

interface SectionHeaderProps {
  eyebrow?: string
  title: ReactNode
  lead?: string
  center?: boolean
  compact?: boolean
  titleAs?: 'h1' | 'h2'
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  center = false,
  compact = false,
  titleAs = 'h2',
}: SectionHeaderProps) {
  const classes = [
    'section__header',
    center ? 'section__header--center' : '',
    compact ? 'section__header--compact' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const TitleTag = titleAs

  return (
    <AnimatedSection className={classes}>
      {eyebrow && <p className="section__eyebrow">{eyebrow}</p>}
      <TitleTag className="section__title">{title}</TitleTag>
      {lead && <p className="section__lead">{lead}</p>}
    </AnimatedSection>
  )
}
