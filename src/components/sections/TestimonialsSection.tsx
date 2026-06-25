import { useHubConfig } from '../../i18n/useHubConfig'
import { useLocale } from '../../i18n/LocaleContext'
import { uiCopy } from '../../data/uiCopy'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeader } from './CtaBand'

export function TestimonialsSection() {
  const config = useHubConfig()
  const { t } = useLocale()

  return (
    <section className="section section--light" id="depoimentos">
      <div className="container">
        <SectionHeader
          center
          eyebrow={t(uiCopy.home.testimonialsEyebrow)}
          title={
            <>
              {t(uiCopy.home.testimonialsTitleBefore)}
              <span className="highlight">{t(uiCopy.home.testimonialsTitleHighlight)}</span>
            </>
          }
          lead={t(uiCopy.home.testimonialsLead)}
        />
        <div className="testimonials-grid">
          {config.testimonials.map((item, i) => (
            <AnimatedSection key={item.nome} delay={i + 1} className="testimonial-card">
              {item.rating && (
                <div className="testimonial-card__stars" aria-label={`${item.rating} estrelas`}>
                  {'★'.repeat(item.rating)}
                </div>
              )}
              <blockquote className="testimonial-card__quote">
                <p>{item.texto}</p>
              </blockquote>
              <footer className="testimonial-card__author">
                <strong>{item.nome}</strong>
                <span>{item.cargo}</span>
              </footer>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
