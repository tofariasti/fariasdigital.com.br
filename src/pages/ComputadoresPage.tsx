import { motion } from 'framer-motion'
import { PageMeta } from '../components/ui/PageMeta'
import { HeroHome } from '../components/sections/HeroHome'
import { SectionHeader } from '../components/sections/CtaBand'
import { useHubConfig } from '../i18n/useHubConfig'
import { useLocale } from '../i18n/LocaleContext'
import { uiCopy } from '../data/uiCopy'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'
import { useReducedMotion } from '../hooks/useReducedMotion'
import type { Pacote } from '../data/types'

function ComputadorPackages() {
  const config = useHubConfig()
  const { t } = useLocale()
  const reduced = useReducedMotion()

  return (
    <div className="package-grid">
      {config.pacotesComputador.map((pkg: Pacote, i) => {
        const card = (
          <>
            {pkg.badge && (
              <span className={`package-card__badge${pkg.destaque ? ' package-card__badge--value' : ''}`}>
                {pkg.badge}
              </span>
            )}
            <h3 className="package-card__name">{pkg.nome}</h3>
            <p className="package-card__price">{pkg.preco}</p>
            <p className="package-card__audience">{pkg.publico}</p>
            <ul className="package-card__list">
              {pkg.inclui.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {pkg.naoInclui && (
              <p className="package-card__note">{t(uiCopy.common.notIncluded)} {pkg.naoInclui}</p>
            )}
            <WhatsAppButton waKey={pkg.mensagemWhatsApp} className="btn btn--whatsapp btn--block">
              {t(uiCopy.cta.requestQuote)}
            </WhatsAppButton>
          </>
        )

        const className = `package-card${pkg.destaque ? ' package-card--featured' : ''}`

        if (reduced) {
          return (
            <AnimatedSection key={pkg.id} delay={i + 1} className={className}>
              {card}
            </AnimatedSection>
          )
        }

        return (
          <AnimatedSection key={pkg.id} delay={i + 1}>
            <motion.article
              className={className}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {card}
            </motion.article>
          </AnimatedSection>
        )
      })}
    </div>
  )
}

export function ComputadoresPage() {
  const config = useHubConfig()
  const { t } = useLocale()
  const urgency = uiCopy.computadores.urgency.map((s) => ({ title: t(s.title), text: t(s.text) }))
  const services = uiCopy.computadores.services.map((s) => ({ title: t(s.title), text: t(s.text) }))
  const trustItems = uiCopy.computadores.trust.map((item) => t(item))

  return (
    <>
      <PageMeta page="computadores" />
      <HeroHome
        compact
        label={t(uiCopy.computadores.label)}
        titleLines={[t(uiCopy.computadores.title1), t(uiCopy.computadores.title2)]}
        subtitle={t(uiCopy.computadores.subtitle)}
        showPreview={false}
        actions={
          <div className="hero__actions">
            <a href="#pacotes" className="btn btn--primary btn--lg">
              {t(uiCopy.cta.viewPackagesShort)}
            </a>
            <WhatsAppButton waKey="computador" className="btn btn--whatsapp btn--lg">
              {t(uiCopy.cta.talkNowWhatsApp)}
            </WhatsAppButton>
          </div>
        }
      />

      <section className="section section--alt section--glow">
        <div className="container">
          <SectionHeader
            eyebrow={t(uiCopy.computadores.urgencyEyebrow)}
            title={t(uiCopy.computadores.urgencyTitle)}
            lead={t(uiCopy.computadores.urgencyLead)}
          />
          <div className="service-grid service-grid--3">
            {urgency.map((item, i) => (
              <AnimatedSection key={item.title} delay={i + 1} className="service-card service-card--alert">
                <h3 className="service-card__title">{item.title}</h3>
                <p className="service-card__text">{item.text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--glow">
        <div className="container">
          <SectionHeader
            eyebrow={t(uiCopy.computadores.servicesEyebrow)}
            title={t(uiCopy.computadores.servicesTitle)}
          />
          <div className="service-grid">
            {services.map((item, i) => (
              <AnimatedSection key={item.title} delay={i + 1} className="service-card">
                <h3 className="service-card__title">{item.title}</h3>
                <p className="service-card__text">{item.text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="pacotes">
        <div className="container">
          <SectionHeader
            center
            eyebrow={t(uiCopy.computadores.packagesEyebrow)}
            title={t(uiCopy.computadores.packagesTitle)}
            lead={t(uiCopy.computadores.packagesLead)}
          />
          <ComputadorPackages />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow={t(uiCopy.computadores.processEyebrow)}
            title={t(uiCopy.computadores.processTitle)}
          />
          <div className="steps">
            {config.processoComputador.map((step, i) => (
              <AnimatedSection key={step.passo} delay={i + 1} className="step">
                <span className="step__num">{String(step.passo).padStart(2, '0')}</span>
                <h3 className="step__title">{step.titulo}</h3>
                <p className="step__text">{step.texto}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeader
            eyebrow={t(uiCopy.computadores.faqEyebrow)}
            title={t(uiCopy.computadores.faqTitle)}
          />
          <div className="faq-list">
            {config.faqComputador.map((item, i) => (
              <AnimatedSection key={item.pergunta} delay={i + 1}>
                <details className="faq-item" open={i === 0}>
                  <summary>{item.pergunta}</summary>
                  <p>{item.resposta}</p>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow={t(uiCopy.computadores.trustEyebrow)}
            title={t(uiCopy.computadores.trustTitle)}
          />
          <AnimatedSection delay={1}>
            <ul
              className="trust-bar"
              style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.85rem' }}
            >
              {trustItems.map((item) => (
                <li key={item}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <AnimatedSection>
            <h2 className="cta-band__title">{t(uiCopy.computadores.ctaTitle)}</h2>
          </AnimatedSection>
          <AnimatedSection delay={1}>
            <p className="cta-band__text">{t(uiCopy.computadores.ctaText)}</p>
          </AnimatedSection>
          <AnimatedSection delay={2} className="hero__actions" style={{ justifyContent: 'center', marginBottom: 0 }}>
            <WhatsAppButton waKey="computador" className="btn btn--whatsapp btn--lg">
              {t(uiCopy.cta.talkNowWhatsApp)}
            </WhatsAppButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
