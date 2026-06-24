import { Link } from 'react-router-dom'
import { PageMeta } from '../components/ui/PageMeta'
import { HeroHome } from '../components/sections/HeroHome'
import { ProofBar } from '../components/sections/ProofBar'
import { CredibilityStrip } from '../components/sections/CredibilityStrip'
import {
  ComparisonTable,
  ComparativoQuote,
} from '../components/sections/ComparisonSection'
import { MiniServices } from '../components/sections/MiniServices'
import { IntentGrid } from '../components/sections/IntentGrid'
import { Marquee, DiffGrid, CtaBand, SectionHeader } from '../components/sections/CtaBand'
import { useHubConfig } from '../i18n/useHubConfig'
import { useLocale } from '../i18n/LocaleContext'
import { uiCopy } from '../data/uiCopy'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'
import { PageAnchors } from '../components/ui/PageAnchors'

export function HomePage() {
  const config = useHubConfig()
  const { t, pathFor } = useLocale()
  const cmp = config.comparativoInstagram
  const limit = cmp.resumoLimite

  return (
    <>
      <PageMeta page="home" />
      <HeroHome
        showPricingTags
        actions={
          <div className="hero__actions">
            <WhatsAppButton waKey="pacoteLandingAdmin" className="btn btn--whatsapp btn--lg">
              {t(uiCopy.cta.wantLandingPanel)}
            </WhatsAppButton>
            <Link to={pathFor('/portfolio/')} className="btn btn--outline btn--lg">
              {t(uiCopy.cta.viewExamples)}
            </Link>
            <Link to={pathFor('/pacotes/')} className="btn btn--ghost btn--lg">
              {t(uiCopy.cta.viewPackagesShort)}
            </Link>
          </div>
        }
      />
      <div className="container">
        <ProofBar />
      </div>
      <CredibilityStrip />

      <div className="container">
        <PageAnchors
          className="page-anchors--center"
          items={[
            { id: 'site-vs-instagram', label: uiCopy.anchors.comparison },
            { id: 'servicos', label: uiCopy.anchors.services },
            { id: 'objetivos', label: uiCopy.anchors.goals },
            { id: 'explore', label: uiCopy.anchors.explore },
            { id: 'como-trabalho', label: uiCopy.anchors.howIWork },
          ]}
        />
      </div>

      <section className="section section--dark site-vs-insta" id="site-vs-instagram">
        <div className="container">
          <SectionHeader
            center
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
            <ComparisonTable
              instagramItems={cmp.instagram.slice(0, limit)}
              siteItems={cmp.site.slice(0, limit)}
            />
          </AnimatedSection>
          <AnimatedSection>
            <ComparativoQuote titulo={cmp.quote.titulo} texto={cmp.quote.texto} />
          </AnimatedSection>
          <AnimatedSection className="comparativo-more">
            <Link to={pathFor('/por-que-site/')} className="btn btn--outline">
              {t(uiCopy.cta.viewFullComparison)}
            </Link>
          </AnimatedSection>
          <AnimatedSection className="inline-cta inline-cta--emphasis">
            <p>
              {t(uiCopy.home.stopLosingClients)}{' '}
              <strong>{t(uiCopy.home.investInTool)}</strong>
            </p>
            <Link to={pathFor('/pacotes/')} className="btn btn--primary btn--lg">
              {t(uiCopy.cta.viewPackages)}
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="section section--glow" id="servicos">
        <div className="container">
          <SectionHeader
            center
            eyebrow={t(uiCopy.home.servicesEyebrow)}
            title={
              <>
                {t(uiCopy.home.servicesTitleBefore)}
                <span className="highlight">{t(uiCopy.home.servicesTitleHighlight)}</span>
              </>
            }
            lead={t(uiCopy.home.servicesLead)}
          />
          <MiniServices />
          <AnimatedSection className="servicos-home-cta">
            <Link to={pathFor('/pacotes/')} className="btn btn--outline btn--lg">
              {t(uiCopy.cta.viewPackages)}
            </Link>
            <WhatsAppButton waKey="geral" className="btn btn--whatsapp btn--lg">
              {t(uiCopy.cta.requestQuote)}
            </WhatsAppButton>
          </AnimatedSection>
        </div>
        <div className="section__next">
          <a href="#objetivos" className="page-anchors__link">
            {t(uiCopy.anchors.nextSection)} {t(uiCopy.anchors.goals)}
          </a>
        </div>
      </section>

      <Marquee />

      <section className="section section--alt section--glow" id="objetivos">
        <div className="container">
          <SectionHeader
            center
            eyebrow={t(uiCopy.home.goalsEyebrow)}
            title={
              <>
                {t(uiCopy.home.goalsTitleBefore)}
                <span className="highlight">{t(uiCopy.home.goalsTitleHighlight)}</span>
              </>
            }
            lead={t(uiCopy.home.goalsLead)}
          />
          <IntentGrid />
        </div>
        <div className="section__next">
          <a href="#explore" className="page-anchors__link">
            {t(uiCopy.anchors.nextSection)} {t(uiCopy.anchors.explore)}
          </a>
        </div>
      </section>

      <section className="section" id="explore">
        <div className="container">
          <SectionHeader
            center
            eyebrow={t(uiCopy.home.exploreEyebrow)}
            title={
              <>
                {t(uiCopy.home.exploreTitleBefore)}
                <span className="highlight">{t(uiCopy.home.exploreTitleHighlight)}</span>
              </>
            }
            lead={t(uiCopy.home.exploreLead)}
          />
          <div className="intent-grid">
            <AnimatedSection delay={1}>
              <Link to={pathFor('/pacotes/')} className="intent-card">
                <h3 className="intent-card__title">{t(uiCopy.home.cardPackagesTitle)}</h3>
                <p className="intent-card__desc">{t(uiCopy.home.cardPackagesDesc)}</p>
                <span className="intent-card__link">{t(uiCopy.home.cardPackagesLink)}</span>
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={2}>
              <Link to={pathFor('/portfolio/')} className="intent-card">
                <h3 className="intent-card__title">{t(uiCopy.home.cardPortfolioTitle)}</h3>
                <p className="intent-card__desc">{t(uiCopy.home.cardPortfolioDesc)}</p>
                <span className="intent-card__link">{t(uiCopy.home.cardPortfolioLink)}</span>
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={3}>
              <Link to={pathFor('/faq/')} className="intent-card">
                <h3 className="intent-card__title">{t(uiCopy.home.cardFaqTitle)}</h3>
                <p className="intent-card__desc">{t(uiCopy.home.cardFaqDesc)}</p>
                <span className="intent-card__link">{t(uiCopy.home.cardFaqLink)}</span>
              </Link>
            </AnimatedSection>
          </div>
        </div>
        <div className="section__next">
          <a href="#como-trabalho" className="page-anchors__link">
            {t(uiCopy.anchors.nextSection)} {t(uiCopy.anchors.howIWork)}
          </a>
        </div>
      </section>

      <section className="section section--alt section--glow" id="como-trabalho">
        <div className="container">
          <SectionHeader
            center
            eyebrow={t(uiCopy.home.howEyebrow)}
            title={
              <>
                {t(uiCopy.home.howTitleBefore)}
                <span className="highlight">{t(uiCopy.home.howTitleHighlight)}</span>
              </>
            }
            lead={t(uiCopy.home.howLead)}
          />
          <DiffGrid />
          <AnimatedSection className="inline-cta">
            <p>
              {t(uiCopy.home.stillDoubt)}{' '}
              <Link to={pathFor('/faq/')}>{t(uiCopy.home.seeFaq)}</Link> {t(uiCopy.home.stillDoubtOr)}{' '}
              <Link to={pathFor('/por-que-site/')}>{t(uiCopy.home.readComparison)}</Link>.
            </p>
            <WhatsAppButton waKey="geral">{t(uiCopy.cta.talkNowWhatsApp)}</WhatsAppButton>
          </AnimatedSection>
        </div>
      </section>

      <CtaBand
        title={t(uiCopy.home.ctaTitle)}
        text={
          <>
            {t(uiCopy.home.ctaTextBefore)}
            <Link to={pathFor('/pacotes/')} style={{ color: 'inherit', textDecoration: 'underline' }}>
              {t(uiCopy.cta.viewPackages)}
            </Link>
          </>
        }
      />
    </>
  )
}
