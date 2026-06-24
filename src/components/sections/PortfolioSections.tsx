import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useHubConfig } from '../../i18n/useHubConfig'
import { useLocale } from '../../i18n/LocaleContext'
import { uiCopy } from '../../data/uiCopy'
import { segmentLocalized } from '../../data/segmentsLocalized'
import { buildDemoWhatsAppUrl } from '../../utils/whatsapp'
import {
  PORTFOLIO_SEGMENT_PARAM,
  resolveSegmentFromSlug,
  segmentSlugForLabel,
} from '../../utils/portfolioSegment'
import { filterDemosBySearch, normalizeSearchQuery } from '../../utils/portfolioSearch'
import {
  filterLandingAdminDemos,
  isPanelFilterActive,
  panelShowcaseDemos,
  PORTFOLIO_PANEL_PARAM,
} from '../../utils/portfolioPanel'
import { isLandingAdminDemo } from '../../utils/heroDemo'
import { AnimatedSection } from '../ui/AnimatedSection'
import { WhatsAppButton } from '../ui/WhatsAppButton'
import type { Demo } from '../../data/types'

function DemoCard({
  demo,
  index,
  highlight = false,
}: {
  demo: Demo
  index: number
  highlight?: boolean
}) {
  const config = useHubConfig()
  const { t } = useLocale()
  const badge = demo.badge ?? config.portfolio.badgeDemo
  const isAdmin = highlight || isLandingAdminDemo(demo)
  const hasIframe = demo.preview !== false && demo.url && !demo.url.includes('github.com')

  return (
    <AnimatedSection
      delay={(index % 3) + 1}
      className={`demo-card demo-card--modelo${isAdmin ? ' demo-card--admin' : ''}`}
    >
      <div className={`demo-card__preview${hasIframe ? '' : ' demo-card__preview--project'}`}>
        <span
          className={`demo-card__badge demo-card__badge--modelo${isAdmin ? ' demo-card__badge--admin' : ''}`}
        >
          {badge}
        </span>
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

const PAINEL_FILTER = '__painel__' as const

export function PanelProofShowcase() {
  const config = useHubConfig()
  const { t, pathFor } = useLocale()
  const [, setSearchParams] = useSearchParams()
  const demos = useMemo(() => panelShowcaseDemos(config.demos), [config.demos])
  const p = config.portfolio

  const scrollToAllWithPanel = () => {
    setSearchParams({ [PORTFOLIO_PANEL_PARAM]: '1' }, { replace: true })
    document.getElementById('demos-root')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  if (demos.length === 0) return null

  return (
    <section className="panel-showcase" id="painel-demos" aria-labelledby="panel-showcase-title">
      <AnimatedSection className="portfolio-group__header">
        <h2 className="portfolio-group__title" id="panel-showcase-title">
          {p.grupoPainel.titulo}
        </h2>
        <p className="portfolio-group__lead">{p.grupoPainel.lead}</p>
        <p className="panel-showcase__hint">{t(uiCopy.portfolio.panelHint)}</p>
      </AnimatedSection>
      <div className="demo-grid demo-grid--showcase">
        {demos.map((demo, i) => (
          <DemoCard key={demo.url} demo={demo} index={i} highlight />
        ))}
      </div>
      <AnimatedSection className="panel-showcase__actions">
        <button type="button" className="btn btn--outline" onClick={scrollToAllWithPanel}>
          {t(uiCopy.portfolio.viewPanelDemos)}
        </button>
        <WhatsAppButton waKey="pacoteLandingAdmin" className="btn btn--whatsapp btn--lg">
          {t(uiCopy.cta.wantLandingPanel)}
        </WhatsAppButton>
        <Link to={pathFor('/pacotes/')} className="btn btn--ghost">
          {t(uiCopy.cta.viewPackagesShort)}
        </Link>
      </AnimatedSection>
    </section>
  )
}

export function DemoGrid() {
  const config = useHubConfig()
  const { t } = useLocale()
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  const barRef = useRef<HTMLDivElement>(null)
  const normalizedSearchQuery = normalizeSearchQuery(searchQuery)

  const segmentOrder = useMemo(
    () => Object.values(segmentLocalized).map((seg) => t(seg)),
    [t],
  )

  const availableSegments = useMemo(
    () => new Set(config.demos.map((d) => d.segmento)),
    [config.demos],
  )

  const counts = useMemo(() => {
    const map = new Map<string, number>()
    config.demos.forEach((d) => {
      map.set(d.segmento, (map.get(d.segmento) ?? 0) + 1)
    })
    return map
  }, [config.demos])

  const panelActive = isPanelFilterActive(searchParams)

  const panelCount = useMemo(
    () => filterLandingAdminDemos(config.demos).length,
    [config.demos],
  )

  const segmentos = useMemo(() => {
    const ordered = segmentOrder.filter((seg) => availableSegments.has(seg))
    return ['todos', PAINEL_FILTER, ...ordered]
  }, [availableSegments, segmentOrder])

  const filter = useMemo(() => {
    if (panelActive) return PAINEL_FILTER
    const slug = searchParams.get(PORTFOLIO_SEGMENT_PARAM)
    if (!slug) return 'todos'
    const segment = resolveSegmentFromSlug(slug, t)
    if (!segment || !availableSegments.has(segment)) return 'todos'
    return segment
  }, [availableSegments, panelActive, searchParams, t])

  const filtered = useMemo(() => {
    const base =
      filter === PAINEL_FILTER
        ? filterLandingAdminDemos(config.demos)
        : filter === 'todos'
          ? config.demos
          : config.demos.filter((d) => d.segmento === filter)
    return filterDemosBySearch(base, searchQuery)
  }, [config.demos, filter, searchQuery])

  const selectFilter = (seg: string) => {
    if (seg === PAINEL_FILTER) {
      setSearchParams({ [PORTFOLIO_PANEL_PARAM]: '1' }, { replace: true })
      return
    }
    if (seg === 'todos') {
      setSearchParams({}, { replace: true })
      return
    }
    const slug = segmentSlugForLabel(seg, t)
    if (slug) setSearchParams({ [PORTFOLIO_SEGMENT_PARAM]: slug }, { replace: true })
  }

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return
    const active = bar.querySelector<HTMLButtonElement>('.filter-btn.is-active')
    active?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [filter])

  return (
    <>
      <div className="filter-toolbar">
        <div className="filter-search">
          <svg
            className="filter-search__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="search"
            className="filter-search__input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t(uiCopy.common.searchModelsPlaceholder)}
            aria-label={t(uiCopy.common.searchModels)}
          />
        </div>
        <div className="filter-bar-wrap">
          <div
            ref={barRef}
            className="filter-bar"
            role="tablist"
            aria-label={t(uiCopy.common.filterBySegment)}
          >
            {segmentos.map((seg) => {
              const isActive = filter === seg
              const count =
                seg === 'todos'
                  ? config.demos.length
                  : seg === PAINEL_FILTER
                    ? panelCount
                    : (counts.get(seg) ?? 0)
              const label =
                seg === 'todos'
                  ? t(uiCopy.common.filterAll)
                  : seg === PAINEL_FILTER
                    ? t(uiCopy.portfolio.panelFilter)
                    : seg

              return (
                <button
                  key={seg}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`filter-btn${isActive ? ' is-active' : ''}${seg === PAINEL_FILTER ? ' filter-btn--accent' : ''}`}
                  onClick={() => selectFilter(seg)}
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
      </div>
      <p className="filter-meta" aria-live="polite">
        <span className="filter-meta__count">{filtered.length}</span>{' '}
        {t(uiCopy.common.filterModels)}
        {filter !== 'todos' && (
          <>
            {' '}
            <span className="filter-meta__segment">
              · {filter === PAINEL_FILTER ? t(uiCopy.portfolio.panelFilter) : filter}
            </span>
          </>
        )}
        {normalizedSearchQuery && (
          <>
            {' '}
            <span className="filter-meta__query">· “{searchQuery.trim()}”</span>
          </>
        )}
      </p>
      {filtered.length === 0 ? (
        <div className="filter-empty">
          <p className="filter-empty__text">{t(uiCopy.common.searchNoResults)}</p>
          <button type="button" className="btn btn--outline btn--sm" onClick={() => setSearchQuery('')}>
            {t(uiCopy.common.clearSearch)}
          </button>
        </div>
      ) : (
        <div className="demo-grid">
          {filtered.map((demo, i) => (
            <DemoCard key={demo.url} demo={demo} index={i} />
          ))}
        </div>
      )}
    </>
  )
}

export function PricingCallout() {
  const { t } = useLocale()

  return (
    <div className="pricing-callout pricing-callout--panel">
      <div className="pricing-callout__content">
        <p className="pricing-callout__eyebrow">{t(uiCopy.hero.panelTag)}</p>
        <h3 className="pricing-callout__title">{t(uiCopy.cta.wantLandingPanel)}</h3>
        <p className="pricing-callout__price">{t(uiCopy.hero.from590)}</p>
        <p className="pricing-callout__lead">{t(uiCopy.portfolio.panelHint)}</p>
      </div>
      <div className="pricing-callout__actions">
        <a href="#painel-demos" className="btn btn--primary btn--lg">
          {t(uiCopy.portfolio.viewPanelDemos)}
        </a>
        <WhatsAppButton waKey="pacoteLandingAdmin" className="btn btn--whatsapp btn--lg">
          {t(uiCopy.cta.requestQuote)}
        </WhatsAppButton>
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
