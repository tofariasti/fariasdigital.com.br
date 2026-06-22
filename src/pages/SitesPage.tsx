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
            <a href="#pacotes" className="btn btn--primary btn--lg">
              {t(uiCopy.cta.viewPackagesShort)}
            </a>
            <WhatsAppButton waKey="site" className="btn btn--whatsapp btn--lg">
              {t(uiCopy.cta.requestQuote)}
            </WhatsAppButton>
          </div>
        }
      />

      <section className="section section--alt section--glow">
        <div className="container">
          <SectionHeader
            eyebrow={t(uiCopy.sites.audienceEyebrow)}
            title={t(uiCopy.sites.audienceTitle)}
            lead={t(uiCopy.sites.audienceLead)}
          />
          <div className="service-grid">
            <AnimatedSection delay={1} className="service-card">
              <h3 className="service-card__title">{t(uiCopy.sites.problemTitle)}</h3>
              <p className="service-card__text">{t(uiCopy.sites.problemText)}</p>
            </AnimatedSection>
            <AnimatedSection delay={2} className="service-card">
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
      </section>

      <section className="section" id="pacotes">
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
          <AnimatedSection className="section__actions" style={{ textAlign: 'center' }}>
            <Link to={pathFor('/portfolio/')} className="btn btn--primary btn--lg">
              {t(uiCopy.cta.openFullPortfolio)}
            </Link>
            <WhatsAppButton waKey="pacoteLanding" className="btn btn--whatsapp btn--lg">
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
