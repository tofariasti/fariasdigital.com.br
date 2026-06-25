import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useHubConfig } from '../../i18n/useHubConfig'
import { useLocale } from '../../i18n/LocaleContext'
import { uiCopy } from '../../data/uiCopy'
import { AnimatedSection } from '../ui/AnimatedSection'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import {
  demoSlugFromUrl,
  filterHeroDemos,
  getHeroDemoChips,
  HERO_DEMO_ROTATE_MS,
  pickRandomDemoIndex,
} from '../../utils/heroDemo'
import { HeroTrustIcons } from './HeroTrustIcons'
import { StatsBar } from './StatsBar'

interface HeroHomeProps {
  compact?: boolean
  label?: string
  titleLines?: [string, string]
  subtitle?: string
  showPreview?: boolean
  showPricingTags?: boolean
  actions?: React.ReactNode
}

export function HeroHome({
  compact = false,
  label,
  titleLines,
  subtitle,
  showPreview = true,
  showPricingTags = false,
  actions,
}: HeroHomeProps) {
  const config = useHubConfig()
  const { t, pathFor } = useLocale()
  const reduced = useReducedMotion()
  const [wordIndex, setWordIndex] = useState(0)
  const heroDemos = useMemo(() => filterHeroDemos(config.demos), [config.demos])
  const [demoIndex, setDemoIndex] = useState(() =>
    heroDemos.length ? Math.floor(Math.random() * heroDemos.length) : 0,
  )

  const resolvedLabel = label ?? t(uiCopy.hero.defaultLabel)
  const resolvedTitleLines = titleLines ?? [t(uiCopy.hero.defaultTitle1), t(uiCopy.hero.rotateWords)[0]] as [string, string]
  const resolvedSubtitle = subtitle ?? t(uiCopy.hero.defaultSubtitle)
  const rotateWords = t(uiCopy.hero.rotateWords)
  const activeDemo = heroDemos[demoIndex] ?? heroDemos[0]
  const demoSlug = activeDemo ? demoSlugFromUrl(activeDemo.url) : 'demo'
  const demoTypeLabels = useMemo(
    () => ({
      landing: t(uiCopy.hero.preview.typeLanding),
      ecommerce: t(uiCopy.hero.preview.typeEcommerce),
      catalog: t(uiCopy.hero.preview.typeCatalog),
      portal: t(uiCopy.hero.preview.typePortal),
      landingAdmin: t(uiCopy.hero.preview.typeLandingAdmin),
      leadsWhatsApp: t(uiCopy.common.leadsWhatsApp),
    }),
    [t],
  )
  const demoChips = activeDemo ? getHeroDemoChips(activeDemo, demoTypeLabels) : []

  useEffect(() => {
    if (reduced || compact) return
    const id = window.setInterval(() => {
      setWordIndex((i) => (i + 1) % rotateWords.length)
    }, 3200)
    return () => window.clearInterval(id)
  }, [compact, reduced, rotateWords.length])

  useEffect(() => {
    if (reduced || compact || heroDemos.length < 2) return
    const id = window.setInterval(() => {
      setDemoIndex((i) => pickRandomDemoIndex(i, heroDemos.length))
    }, HERO_DEMO_ROTATE_MS)
    return () => window.clearInterval(id)
  }, [compact, reduced, heroDemos.length])

  const accentWord = compact ? resolvedTitleLines[1] : rotateWords[wordIndex]

  return (
    <section className={`hero${compact ? ' hero--compact' : ' hero--home'}`}>
      <div className={`container${showPreview && !compact ? ' hero__grid' : ''}`}>
        <div className="hero__content">
          <AnimatedSection>
            <span className="hero__label">
              <span className="hero__label-dot" aria-hidden="true" />
              {resolvedLabel}
            </span>
          </AnimatedSection>
          <AnimatedSection delay={1}>
            <h1 className="hero__title">
              <span className="hero__title-line">{resolvedTitleLines[0]}</span>
              <span className="hero__title-line hero__title-line--accent">
                {compact ? (
                  accentWord
                ) : (
                  <>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={accentWord}
                        initial={reduced ? false : { opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduced ? undefined : { opacity: 0, y: -12 }}
                        transition={{ duration: 0.35 }}
                        className="text-rotate"
                      >
                        {accentWord}
                      </motion.span>
                    </AnimatePresence>
                    {!reduced && <span className="text-rotate__cursor" aria-hidden="true" />}
                  </>
                )}
              </span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={2}>
            <p className="hero__subtitle">{resolvedSubtitle}</p>
          </AnimatedSection>
          {showPricingTags && (
            <AnimatedSection delay={2}>
              <div className="hero-pricing-tags">
                <span className="hero-pricing-tag">
                  <span className="hero-pricing-tag__label">{t(uiCopy.hero.landingTag)}</span>
                  <span className="hero-pricing-tag__price">{t(uiCopy.hero.from300)}</span>
                </span>
                <span className="hero-pricing-tag hero-pricing-tag--accent">
                  <span className="hero-pricing-tag__label">{t(uiCopy.hero.panelTag)}</span>
                  <span className="hero-pricing-tag__price">{t(uiCopy.hero.from590)}</span>
                </span>
                <span className="hero-pricing-tag">
                  <span className="hero-pricing-tag__label">{t(uiCopy.hero.institutionalTag)}</span>
                  <span className="hero-pricing-tag__price">{t(uiCopy.hero.from1490)}</span>
                </span>
              </div>
            </AnimatedSection>
          )}
          <AnimatedSection delay={3}>
            {actions ?? (
              <div className="hero__actions">
                <Link to={pathFor('/pacotes/')} className="btn btn--primary btn--lg">
                  {t(uiCopy.cta.viewPackages)}
                </Link>
                <Link to={pathFor('/portfolio/')} className="btn btn--outline btn--lg">
                  {t(uiCopy.cta.viewExamples)}
                </Link>
              </div>
            )}
          </AnimatedSection>
          {!compact && (
            <AnimatedSection delay={4}>
              <HeroTrustIcons />
            </AnimatedSection>
          )}
        </div>

        {showPreview && !compact && activeDemo && (
          <AnimatedSection delay={2} direction="right" className="hero-visual">
            <div className="hero-orbit" aria-hidden="true">
              <span className="hero-orbit__ring hero-orbit__ring--1">
                <span className="hero-orbit__dot" />
              </span>
              <span className="hero-orbit__ring hero-orbit__ring--2" />
            </div>
            <div className="hero-visual__glow" />
            <div className="browser-preview browser-preview--glow">
              <div className="browser-preview__bar">
                <span className="hero-mockup__dot hero-mockup__dot--r" />
                <span className="hero-mockup__dot hero-mockup__dot--y" />
                <span className="hero-mockup__dot hero-mockup__dot--g" />
                <span className="browser-preview__url">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={demoSlug}
                      initial={reduced ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={reduced ? undefined : { opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {demoSlug}.demo · {config.dominioHost}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </div>
              <div className="browser-preview__screen">
                <AnimatePresence mode="wait">
                  <motion.iframe
                    key={activeDemo.url}
                    src={activeDemo.url}
                    title={`Demo ${activeDemo.titulo}`}
                    loading="lazy"
                    tabIndex={-1}
                    initial={reduced ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={reduced ? undefined : { opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  />
                </AnimatePresence>
              </div>
            </div>
            <div className="hero-demo-caption" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDemo.url}
                  className="hero-demo-caption__inner"
                  initial={reduced ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="hero-demo-caption__meta">
                    <span className="hero-demo-caption__title">{activeDemo.titulo}</span>
                    <span className="hero-demo-caption__segment">{activeDemo.segmento}</span>
                  </p>
                  <p className="hero-demo-caption__desc">{activeDemo.descricao}</p>
                  <div className="hero-demo-caption__chips">
                    {demoChips.map((chip) => (
                      <span
                        key={chip.variant}
                        className={`hero-demo-caption__chip hero-demo-caption__chip--${chip.variant}`}
                      >
                        {chip.label}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <StatsBar className="stats-bar--hero" />
          </AnimatedSection>
        )}
      </div>
    </section>
  )
}
