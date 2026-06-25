import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import { useHubConfig } from '../../i18n/useHubConfig'
import { useLocale } from '../../i18n/LocaleContext'
import { uiCopy } from '../../data/uiCopy'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeader } from './CtaBand'

const SHOWCASE_COUNT = 6

export function TemplateShowcase() {
  const config = useHubConfig()
  const { t, pathFor } = useLocale()

  const demos = useMemo(() => {
    const featured = config.demos.filter((d) => d.heroFeatured)
    const pool = featured.length >= SHOWCASE_COUNT ? featured : config.demos
    return pool.slice(0, SHOWCASE_COUNT)
  }, [config.demos])

  return (
    <section className="section section--light" id="modelos">
      <div className="container">
        <SectionHeader
          center
          eyebrow={t(uiCopy.home.templatesEyebrow)}
          title={
            <>
              {t(uiCopy.home.templatesTitleBefore)}
              <span className="highlight">{t(uiCopy.home.templatesTitleHighlight)}</span>
            </>
          }
          lead={t(uiCopy.home.templatesLead)}
        />
        <div className="template-showcase">
          {demos.map((demo, i) => (
            <AnimatedSection key={demo.url} delay={(i % 3) + 1} className="template-card">
              <a
                href={demo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="template-card__link"
              >
                <div className="template-card__preview">
                  <iframe
                    src={demo.url}
                    title={`Preview ${demo.titulo}`}
                    loading="lazy"
                    tabIndex={-1}
                  />
                  {demo.badge && <span className="template-card__badge">{demo.badge}</span>}
                </div>
                <div className="template-card__body">
                  <p className="template-card__segment">{demo.segmento}</p>
                  <h3 className="template-card__title">{demo.titulo}</h3>
                  <p className="template-card__desc">{demo.descricao}</p>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
        <div className="section__actions section__actions--center">
          <Link to={pathFor('/portfolio/')} className="btn btn--primary btn--lg">
            {t(uiCopy.home.templatesViewAll)}
            <span className="btn__arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
