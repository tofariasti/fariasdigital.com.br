import { Link } from 'react-router-dom'
import { PageMeta } from '../components/ui/PageMeta'
import { HeroHome } from '../components/sections/HeroHome'
import { MiniServices } from '../components/sections/MiniServices'
import { PackageGrid, ProcessSteps } from '../components/sections/PackageGrid'
import { CtaBand, SectionHeader } from '../components/sections/CtaBand'
import { useLocale } from '../i18n/LocaleContext'
import { uiCopy } from '../data/uiCopy'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'
import { PageAnchors } from '../components/ui/PageAnchors'

export function SitesPage() {
  const { t, pathFor } = useLocale()

  return (
    <>
      <PageMeta page="pacotes" />
      <HeroHome
        compact
        label={t(uiCopy.sites.label)}
        titleLines={[t(uiCopy.sites.title1), t(uiCopy.sites.title2)]}
        subtitle={t(uiCopy.sites.subtitle)}
        showPreview={false}
        showPricingTags
        actions={
          <div className="hero__actions">
            <WhatsAppButton waKey="pacoteLandingAdmin" className="btn btn--primary btn--lg">
              {t(uiCopy.cta.wantLandingPanel)}
              <span className="btn__arrow" aria-hidden="true">→</span>
            </WhatsAppButton>
            <a href="#pacotes" className="btn btn--outline btn--lg">
              {t(uiCopy.cta.viewPackagesShort)}
            </a>
            <a href="#servicos" className="btn btn--ghost btn--lg">
              {t(uiCopy.anchors.services)}
            </a>
          </div>
        }
      />

      <div className="container">
        <PageAnchors
          className="page-anchors--center"
          items={[
            { id: 'servicos', label: uiCopy.anchors.services },
            { id: 'pacotes', label: uiCopy.anchors.packages },
          ]}
        />
      </div>

      <section className="section section--alt section--glow pacotes-page">
        <div className="container">
          <SectionHeader
            eyebrow={t(uiCopy.sites.audienceEyebrow)}
            title={t(uiCopy.sites.audienceTitle)}
            lead={t(uiCopy.sites.audienceLead)}
          />
          <div className="service-grid">
            <AnimatedSection delay={1} className="service-card service-card--alert">
              <div className="service-card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M12 9v4M12 17h.01" />
                  <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                </svg>
              </div>
              <h3 className="service-card__title">{t(uiCopy.sites.problemTitle)}</h3>
              <p className="service-card__text">{t(uiCopy.sites.problemText)}</p>
            </AnimatedSection>
            <AnimatedSection delay={2} className="service-card">
              <div className="service-card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M9 12 11 14 15 10" />
                  <path d="M12 3 4 7v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V7l-8-4z" />
                </svg>
              </div>
              <h3 className="service-card__title">{t(uiCopy.sites.solutionTitle)}</h3>
              <p className="service-card__text">{t(uiCopy.sites.solutionText)}</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section section--glow" id="servicos">
        <div className="container">
          <SectionHeader
            center
            eyebrow={t(uiCopy.common.services)}
            title={
              <>
                {t(uiCopy.sites.servicesTitleBefore)}
                <span className="highlight">{t(uiCopy.sites.servicesTitleHighlight)}</span>
              </>
            }
            lead={t(uiCopy.sites.servicesLead)}
          />
          <MiniServices />
        </div>
        <div className="section__next">
          <a href="#pacotes" className="page-anchors__link">
            {t(uiCopy.anchors.nextSection)} {t(uiCopy.anchors.packages)}
          </a>
        </div>
      </section>

      <section className="section section--glow pacotes-page" id="pacotes">
        <div className="container">
          <SectionHeader
            center
            eyebrow={t(uiCopy.common.packages)}
            title={
              <>
                {t(uiCopy.sites.packagesTitleBefore)}
                <span className="highlight">{t(uiCopy.sites.packagesTitleHighlight)}</span>
              </>
            }
            lead={t(uiCopy.sites.packagesLead)}
          />
          <PackageGrid />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeader eyebrow={t(uiCopy.sites.processEyebrow)} title={t(uiCopy.sites.processTitle)} />
          <ProcessSteps />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeader
            center
            eyebrow={t(uiCopy.sites.referencesEyebrow)}
            title={t(uiCopy.sites.referencesTitle)}
            lead={t(uiCopy.sites.referencesLead)}
          />
          <AnimatedSection className="section__actions section__actions--center">
            <Link to={pathFor('/portfolio/')} className="btn btn--primary btn--lg">
              {t(uiCopy.cta.openFullPortfolio)}
              <span className="btn__arrow" aria-hidden="true">→</span>
            </Link>
            <WhatsAppButton waKey="pacoteLanding" className="btn btn--outline btn--lg">
              {t(uiCopy.cta.wantLanding)}
            </WhatsAppButton>
          </AnimatedSection>
        </div>
      </section>

      <CtaBand
        title={t(uiCopy.sites.ctaTitle)}
        text={t(uiCopy.sites.ctaText)}
        waKey="site"
        buttonLabel={t(uiCopy.cta.requestQuoteWhatsApp)}
      />
    </>
  )
}
