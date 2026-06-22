import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useHubConfig } from '../../i18n/useHubConfig'
import { useLocale } from '../../i18n/LocaleContext'
import { uiCopy } from '../../data/uiCopy'
import { AnimatedSection } from '../ui/AnimatedSection'
import { useReducedMotion } from '../../hooks/useReducedMotion'

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

  const resolvedLabel = label ?? t(uiCopy.hero.defaultLabel)
  const resolvedTitleLines = titleLines ?? [t(uiCopy.hero.defaultTitle1), t(uiCopy.hero.rotateWords)[0]] as [string, string]
  const resolvedSubtitle = subtitle ?? t(uiCopy.hero.defaultSubtitle)
  const rotateWords = t(uiCopy.hero.rotateWords)

  useEffect(() => {
    if (reduced || compact) return
    const id = window.setInterval(() => {
      setWordIndex((i) => (i + 1) % rotateWords.length)
    }, 3200)
    return () => window.clearInterval(id)
  }, [compact, reduced, rotateWords.length])

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
              <ul className="hero__trust">
                <li>{t(uiCopy.hero.trustModels)}</li>
                <li>{t(uiCopy.hero.trustResponse)}</li>
                <li>{config.cidadeRegiao}</li>
              </ul>
            </AnimatedSection>
          )}
        </div>

        {showPreview && !compact && (
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
                  amo-patas.demo · {config.dominioHost}
                </span>
              </div>
              <div className="browser-preview__screen">
                <iframe
                  src="https://tofariasti.github.io/amo-patas/"
                  title="Demo Amo Patas"
                  loading="lazy"
                  tabIndex={-1}
                />
              </div>
            </div>
            <div className="hero-visual__chips">
              <span className="preview-chip preview-chip--success">{t(uiCopy.common.visualReference)}</span>
              <span className="preview-chip preview-chip--accent">{t(uiCopy.common.leadsWhatsApp)}</span>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  )
}
