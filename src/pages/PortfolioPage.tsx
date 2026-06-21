import { PageMeta } from '../components/ui/PageMeta'
import {
  DemoGrid,
  PricingCallout,
  CasesGrid,
  CredibilitySection,
} from '../components/sections/PortfolioSections'
import { CtaBand, SectionHeader } from '../components/sections/CtaBand'
import { hubConfig } from '../data/hubConfig'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'

export function PortfolioPage() {
  const p = hubConfig.portfolio

  return (
    <>
      <PageMeta page="portfolio" />
      <section className="section section--alt section--page-start" id="exemplos">
        <div className="container">
          <SectionHeader
            center
            compact
            titleAs="h1"
            eyebrow="Portfólio"
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
          <AnimatedSection className="section__actions">
            <a href="#demos-root" className="btn btn--primary btn--lg">
              Ver modelos
            </a>
            <WhatsAppButton waKey="pacoteLanding" className="btn btn--whatsapp btn--lg">
              Pedir orçamento
            </WhatsAppButton>
          </AnimatedSection>

          <div className="portfolio-group">
            <AnimatedSection className="portfolio-group__header">
              <h2 className="portfolio-group__title">{p.grupoDemos.titulo}</h2>
              <p className="portfolio-group__lead">{p.grupoDemos.lead}</p>
            </AnimatedSection>
            <AnimatedSection>
              <PricingCallout />
            </AnimatedSection>
            <div id="demos-root">
              <DemoGrid />
            </div>
            <AnimatedSection style={{ textAlign: 'center', marginTop: '2rem' }}>
              <WhatsAppButton waKey="pacoteLanding" className="btn btn--whatsapp btn--lg">
                Quero minha landing a partir de R$ 300
              </WhatsAppButton>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section" id="cases">
        <div className="container">
          <SectionHeader
            center
            eyebrow="Projetos reais"
            title={
              <>
                Cases em <span className="highlight">produção</span>
              </>
            }
            lead="Sites e aplicações que desenvolvi — referências de qualidade técnica e conversão. Projetos corporativos citados na trajetória referem-se à atuação em equipe."
          />
          <CasesGrid />
        </div>
      </section>

      <section className="section section--alt" id="credibilidade">
        <div className="container">
          <CredibilitySection />
        </div>
      </section>

      <CtaBand
        title="Gostou de algum modelo?"
        text="Conte seu segmento — adapto o layout com sua marca, textos e WhatsApp."
        waKey="pacoteLanding"
        buttonLabel="Solicitar orçamento"
      />
    </>
  )
}
