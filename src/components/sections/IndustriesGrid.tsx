import { Link } from 'react-router-dom'
import { segmentLocalized } from '../../data/segmentsLocalized'
import { useLocale } from '../../i18n/LocaleContext'
import { uiCopy } from '../../data/uiCopy'
import { portfolioFilterUrl, type SegmentSlug } from '../../utils/portfolioSegment'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeader } from './CtaBand'

const segmentSlugs = Object.keys(segmentLocalized) as SegmentSlug[]

export function IndustriesGrid() {
  const { t, pathFor } = useLocale()

  return (
    <section className="section section--alt section--glow" id="segmentos">
      <div className="container">
        <SectionHeader
          center
          eyebrow={t(uiCopy.home.industriesEyebrow)}
          title={
            <>
              {t(uiCopy.home.industriesTitleBefore)}
              <span className="highlight">{t(uiCopy.home.industriesTitleHighlight)}</span>
            </>
          }
          lead={t(uiCopy.home.industriesLead)}
        />
        <div className="industries-grid">
          {segmentSlugs.map((slug, i) => (
            <AnimatedSection key={slug} delay={(i % 4) + 1}>
              <Link
                to={pathFor(portfolioFilterUrl(slug))}
                className="industries-grid__card"
              >
                <span className="industries-grid__label">{t(segmentLocalized[slug])}</span>
                <span className="industries-grid__arrow" aria-hidden="true">→</span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
