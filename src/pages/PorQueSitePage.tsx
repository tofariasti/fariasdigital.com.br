import { Link } from 'react-router-dom'
import { PageMeta } from '../components/ui/PageMeta'
import {
  ComparisonTable,
  ComparativoQuote,
  ComparativoStats,
} from '../components/sections/ComparisonSection'
import { SectionHeader } from '../components/sections/CtaBand'
import { hubConfig } from '../data/hubConfig'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'

export function PorQueSitePage() {
  const cmp = hubConfig.comparativoInstagram

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
                Por que sua empresa <span className="highlight">não pode depender só do Instagram</span>
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
              Pare de perder clientes para quem tem site.{' '}
              <strong>Invista na ferramenta que realmente vende.</strong>
            </p>
            <WhatsAppButton waKey="geral" className="btn btn--whatsapp btn--lg">
              Quero um site que vende de verdade
            </WhatsAppButton>
          </AnimatedSection>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <AnimatedSection>
            <h2 className="cta-band__title">Pronto para sair do risco do Instagram?</h2>
          </AnimatedSection>
          <AnimatedSection delay={1}>
            <p className="cta-band__text">Landing page a partir de R$ 300 · Orçamento em até 24h.</p>
          </AnimatedSection>
          <AnimatedSection delay={2} className="hero__actions" style={{ justifyContent: 'center', marginBottom: 0 }}>
            <Link to="/sites/" className="btn btn--outline btn--lg">
              Ver pacotes
            </Link>
            <WhatsAppButton waKey="geral" className="btn btn--whatsapp btn--lg">
              Pedir orçamento
            </WhatsAppButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
