import { Link } from 'react-router-dom'
import { PageMeta } from '../components/ui/PageMeta'
import { HeroHome } from '../components/sections/HeroHome'
import { FaqList } from '../components/sections/FaqList'
import { CtaBand } from '../components/sections/CtaBand'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'

export function FaqPage() {
  return (
    <>
      <PageMeta page="faq" />
      <HeroHome
        compact
        label="Perguntas frequentes"
        titleLines={['Dúvidas sobre', 'sites e landing pages']}
        subtitle="Preços, prazos, SEO, domínio e Nota Fiscal — respostas objetivas para quem está pesquisando solução digital."
        showPreview={false}
      />

      <section className="section section--alt" id="faq">
        <div className="container">
          <FaqList />
          <AnimatedSection style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/sites/" className="btn btn--outline btn--lg">
              Ver pacotes e preços
            </Link>
            <WhatsAppButton waKey="geral" className="btn btn--whatsapp btn--lg">
              Falar no WhatsApp
            </WhatsAppButton>
          </AnimatedSection>
        </div>
      </section>

      <CtaBand
        title="Não encontrou sua resposta?"
        text="Mande sua dúvida — retorno em até 24h, sem compromisso."
        buttonLabel="Chamar no WhatsApp"
      />
    </>
  )
}
