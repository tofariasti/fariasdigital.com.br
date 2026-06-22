import { useEffect, useMemo, useRef, useState } from 'react'
import { useHubConfig } from '../../i18n/useHubConfig'
import { useLocale } from '../../i18n/LocaleContext'
import { uiCopy } from '../../data/uiCopy'
import { segmentLocalized } from '../../data/segmentsLocalized'
import { buildDemoWhatsAppUrl } from '../../utils/whatsapp'
import { AnimatedSection } from '../ui/AnimatedSection'
import { WhatsAppButton } from '../ui/WhatsAppButton'
import type { Demo } from '../../data/types'

function DemoCard({ demo, index }: { demo: Demo; index: number }) {
  const config = useHubConfig()
  const { t } = useLocale()
  const badge = demo.badge ?? config.portfolio.badgeDemo
  const hasIframe = demo.preview !== false && demo.url && !demo.url.includes('github.com')

  return (
    <AnimatedSection delay={(index % 3) + 1} className="demo-card demo-card--modelo">
      <div className={`demo-card__preview${hasIframe ? '' : ' demo-card__preview--project'}`}>
        <span className="demo-card__badge demo-card__badge--modelo">{badge}</span>
        {hasIframe ? (
          <iframe src={demo.url} title={`Preview ${demo.titulo}`} loading="lazy" tabIndex={-1} />
        ) : (
          <div className="demo-card__project">
            <svg
              className="demo-card__project-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M16 18 22 12 16 6M8 6 2 12l6 6" />
            </svg>
            <div className="demo-card__stack">
              {(demo.stack ?? []).map((tag) => (
                <span key={tag} className="demo-card__tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="demo-card__body">
        <p className="demo-card__segment">{demo.segmento}</p>
        <h3 className="demo-card__title">{demo.titulo}</h3>
        <p className="demo-card__desc">{demo.descricao}</p>
        <div className="demo-card__actions">
          <a href={demo.url} className="btn btn--outline" target="_blank" rel="noopener noreferrer">
            {t(uiCopy.cta.viewSite)}
          </a>
          <a
            href={buildDemoWhatsAppUrl(demo.titulo)}
            className="btn btn--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t(uiCopy.cta.wantLikeThis)}
          </a>
        </div>
      </div>
    </AnimatedSection>
  )
}

export function DemoGrid() {
  const config = useHubConfig()
  const { t } = useLocale()
  const barRef = useRef<HTMLDivElement>(null)

  const segmentOrder = useMemo(
    () => Object.values(segmentLocalized).map((seg) => t(seg)),
    [t],
  )

  const counts = useMemo(() => {
    const map = new Map<string, number>()
    config.demos.forEach((d) => {
      map.set(d.segmento, (map.get(d.segmento) ?? 0) + 1)
    })
    return map
  }, [config.demos])

  const segmentos = useMemo(() => {
    const available = new Set(config.demos.map((d) => d.segmento))
    const ordered = segmentOrder.filter((seg) => available.has(seg))
    return ['todos', ...ordered]
  }, [config.demos, segmentOrder])

  const [filter, setFilter] = useState('todos')

  const filtered =
    filter === 'todos'
      ? config.demos
      : config.demos.filter((d) => d.segmento === filter)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return
    const active = bar.querySelector<HTMLButtonElement>('.filter-btn.is-active')
    active?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [filter])

  return (
    <>
      <div className="filter-bar-wrap">
        <div
          ref={barRef}
          className="filter-bar"
          role="tablist"
          aria-label={t(uiCopy.common.filterBySegment)}
        >
          {segmentos.map((seg) => {
            const isActive = filter === seg
            const count = seg === 'todos' ? config.demos.length : (counts.get(seg) ?? 0)
            const label = seg === 'todos' ? t(uiCopy.common.filterAll) : seg

            return (
              <button
                key={seg}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`filter-btn${isActive ? ' is-active' : ''}`}
                onClick={() => setFilter(seg)}
              >
                <span className="filter-btn__label">{label}</span>
                <span className="filter-btn__count" aria-hidden="true">
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </div>
      <p className="filter-meta" aria-live="polite">
        <span className="filter-meta__count">{filtered.length}</span>{' '}
        {t(uiCopy.common.filterModels)}
        {filter !== 'todos' && (
          <>
            {' '}
            <span className="filter-meta__segment">· {filter}</span>
          </>
        )}
      </p>
      <div className="demo-grid">
        {filtered.map((demo, i) => (
          <DemoCard key={demo.url} demo={demo} index={i} />
        ))}
      </div>
    </>
  )
}

export function PricingCallout() {
  const config = useHubConfig()
  const { t } = useLocale()
  const pl = config.pricingLanding

  return (
    <div className="pricing-callout">
      <div className="pricing-callout__content">
        <p className="pricing-callout__eyebrow">{t(uiCopy.common.affordableInvestment)}</p>
        <h3 className="pricing-callout__title">{pl.titulo}</h3>
        <p className="pricing-callout__price">{pl.preco}</p>
        <p className="pricing-callout__lead">{pl.lead}</p>
      </div>
      <div className="pricing-callout__actions">
        <WhatsAppButton waKey="pacoteLanding" className="btn btn--whatsapp btn--lg">
          {t(uiCopy.cta.wantLanding)}
        </WhatsAppButton>
        <a href="#demos-root" className="btn btn--outline">
          {t(uiCopy.cta.viewModels)}
        </a>
      </div>
    </div>
  )
}

export function CasesGrid() {
  const config = useHubConfig()
  const { t } = useLocale()

  return (
    <div className="cases-grid">
      {config.cases.map((c, i) => (
        <AnimatedSection key={c.titulo} delay={i + 1} className="case-card">
          <p className="case-card__segment">{c.segmento}</p>
          <h3 className="case-card__title">{c.titulo}</h3>
          <p className="case-card__desc">{c.descricao}</p>
          {c.url && (
            <a href={c.url} className="btn btn--outline btn--sm" target="_blank" rel="noopener noreferrer">
              {t(uiCopy.cta.viewProject)}
            </a>
          )}
        </AnimatedSection>
      ))}
    </div>
  )
}

export function CredibilitySection() {
  const config = useHubConfig()
  const { t } = useLocale()
  const cred = config.credibilidade

  return (
    <div className="credibility-grid">
      <AnimatedSection direction="left">
        <h2 className="section__title">{cred.titulo}</h2>
        <p className="section__lead">{cred.lead}</p>
        {cred.nota && <p className="credibility-note">{cred.nota}</p>}
        <div className="credibility-sectors">
          {cred.setores.map((s) => (
            <span key={s} className="credibility-sector">
              {s}
            </span>
          ))}
        </div>
        <p style={{ marginTop: '1.5rem' }}>
          <a
            href={config.links.portfolio}
            className="btn btn--outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t(uiCopy.cta.viewTechnicalPortfolio)}
          </a>
        </p>
      </AnimatedSection>
      <div className="timeline">
        {cred.marcos.map((m) => (
          <AnimatedSection key={m.periodo} direction="right" className="timeline__item">
            <span className="timeline__period">{m.periodo}</span>
            <h3 className="timeline__title">{m.titulo}</h3>
            <p className="timeline__text">{m.texto}</p>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}
