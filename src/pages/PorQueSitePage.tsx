import { Link } from 'react-router-dom'
import { PageMeta } from '../components/ui/PageMeta'
import {
  ComparisonTable,
  ComparativoQuote,
  ComparativoStats,
} from '../components/sections/ComparisonSection'
import { SectionHeader } from '../components/sections/CtaBand'
import { useHubConfig } from '../i18n/useHubConfig'
import { useLocale } from '../i18n/LocaleContext'
import { uiCopy } from '../data/uiCopy'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'

export function PorQueSitePage() {
  const config = useHubConfig()
  const { t, pathFor } = useLocale()
  const cmp = config.comparativoInstagram

  return (
    <>
      <PageMeta page="por-que-site" />
      <section className="section section--dark site-vs-insta" id="site-vs-instagram">
        <div className="container">
          <SectionHeader
            center
            titleAs="h1"
            eyebrow={cmp.eyebrow}
            title={
              <>
                {t(uiCopy.home.comparativoTitleBefore)}
                <span className="highlight">{t(uiCopy.home.comparativoHighlight)}</span>
              </>
            }
            lead={cmp.lead}
          />
          <AnimatedSection delay={1}>
            <ComparisonTable instagramItems={cmp.instagram} siteItems={cmp.site} />
          </AnimatedSection>
          <AnimatedSection>
            <ComparativoQuote titulo={cmp.quote.titulo} texto={cmp.quote.texto} />
          </AnimatedSection>
          <AnimatedSection delay={1}>
            <ComparativoStats stats={cmp.stats} />
          </AnimatedSection>
          <AnimatedSection className="inline-cta inline-cta--emphasis">
            <p>
              {t(uiCopy.home.stopLosingClients)}{' '}
              <strong>{t(uiCopy.home.investInTool)}</strong>
            </p>
            <WhatsAppButton waKey="geral" className="btn btn--whatsapp btn--lg">
              {t(uiCopy.cta.wantSiteThatSells)}
            </WhatsAppButton>
          </AnimatedSection>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <AnimatedSection>
            <h2 className="cta-band__title">{t(uiCopy.porQueSite.ctaTitle)}</h2>
          </AnimatedSection>
          <AnimatedSection delay={1}>
            <p className="cta-band__text">{t(uiCopy.porQueSite.ctaText)}</p>
          </AnimatedSection>
          <AnimatedSection delay={2} className="hero__actions" style={{ justifyContent: 'center', marginBottom: 0 }}>
            <Link to={pathFor('/pacotes/')} className="btn btn--outline btn--lg">
              {t(uiCopy.cta.viewPackagesShort)}
            </Link>
            <WhatsAppButton waKey="geral" className="btn btn--whatsapp btn--lg">
              {t(uiCopy.cta.requestQuote)}
            </WhatsAppButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
