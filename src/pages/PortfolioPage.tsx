import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PageMeta } from '../components/ui/PageMeta'
import {
  DemoGrid,
  PanelProofShowcase,
  PricingCallout,
  CasesGrid,
  CredibilitySection,
} from '../components/sections/PortfolioSections'
import { CtaBand, SectionHeader } from '../components/sections/CtaBand'
import { ProofBar } from '../components/sections/ProofBar'
import { useHubConfig } from '../i18n/useHubConfig'
import { useLocale } from '../i18n/LocaleContext'
import { uiCopy } from '../data/uiCopy'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'
import { PageAnchors } from '../components/ui/PageAnchors'
import { PORTFOLIO_SEGMENT_PARAM } from '../utils/portfolioSegment'
import { PORTFOLIO_PANEL_PARAM } from '../utils/portfolioPanel'

export function PortfolioPage() {
  const config = useHubConfig()
  const { t } = useLocale()
  const [searchParams] = useSearchParams()
  const p = config.portfolio

  useEffect(() => {
    if (searchParams.get(PORTFOLIO_PANEL_PARAM) === '1') {
      document.getElementById('demos-root')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }
    if (!searchParams.get(PORTFOLIO_SEGMENT_PARAM)) return
    document.getElementById('demos-root')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [searchParams])

  return (
    <>
      <PageMeta page="portfolio" />
      <section className="section section--page-start portfolio-page" id="exemplos">
        <div className="container">
          <AnimatedSection>
            <span className="hero__label">
              <span className="hero__label-dot" aria-hidden="true" />
              {t(uiCopy.common.portfolioEyebrow)}
            </span>
          </AnimatedSection>
          <SectionHeader
            center
            compact
            titleAs="h1"
            title={
              <>
                <span className="section__title-line">{p.titulo}</span>
                <span className="section__title-line">
                  <span className="highlight">{p.tituloHighlight}</span>
                </span>
              </>
            }
            lead={p.lead}
          />
          <AnimatedSection className="section__actions section__actions--center">
            <a href="#painel-demos" className="btn btn--primary btn--lg">
              {t(uiCopy.portfolio.viewPanelDemos)}
              <span className="btn__arrow" aria-hidden="true">→</span>
            </a>
            <a href="#demos-root" className="btn btn--outline btn--lg">
              {t(uiCopy.cta.viewModels)}
            </a>
            <WhatsAppButton waKey="pacoteLandingAdmin" className="btn btn--ghost btn--lg">
              {t(uiCopy.cta.wantLandingPanel)}
            </WhatsAppButton>
          </AnimatedSection>

          <ProofBar />

          <PageAnchors
            className="page-anchors--center"
            items={[
              { id: 'painel-demos', label: uiCopy.anchors.panelDemos },
              { id: 'demos-root', label: uiCopy.anchors.models },
              { id: 'cases', label: uiCopy.anchors.cases },
              { id: 'credibilidade', label: uiCopy.anchors.credibility },
            ]}
          />

          <div className="portfolio-group">
            <AnimatedSection>
              <PricingCallout />
            </AnimatedSection>
            <PanelProofShowcase />
            <AnimatedSection className="portfolio-group__header">
              <h2 className="portfolio-group__title">{p.grupoDemos.titulo}</h2>
              <p className="portfolio-group__lead">{p.grupoDemos.lead}</p>
            </AnimatedSection>
            <div id="demos-root" className="portfolio-demos">
              <DemoGrid />
            </div>
            <AnimatedSection className="section__actions section__actions--center">
              <WhatsAppButton waKey="pacoteLandingAdmin" className="btn btn--primary btn--lg">
                {t(uiCopy.cta.wantLandingPanel)}
                <span className="btn__arrow" aria-hidden="true">→</span>
              </WhatsAppButton>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section section--alt section--glow portfolio-page" id="cases">
        <div className="container">
          <SectionHeader
            center
            eyebrow={t(uiCopy.common.realProjects)}
            title={
              <>
                {t(uiCopy.portfolio.casesTitleBefore)}
                <span className="highlight">{t(uiCopy.portfolio.casesTitleHighlight)}</span>
              </>
            }
            lead={t(uiCopy.portfolio.casesLead)}
          />
          <CasesGrid />
        </div>
        <div className="section__next">
          <a href="#credibilidade" className="page-anchors__link">
            {t(uiCopy.anchors.nextSection)} {t(uiCopy.anchors.credibility)}
          </a>
        </div>
      </section>

      <section className="section portfolio-page" id="credibilidade">
        <div className="container">
          <CredibilitySection />
        </div>
      </section>

      <CtaBand
        title={t(uiCopy.portfolio.likedModel)}
        text={t(uiCopy.portfolio.likedModelText)}
        waKey="pacoteLandingAdmin"
        buttonLabel={t(uiCopy.cta.wantLandingPanel)}
      />
    </>
  )
}
