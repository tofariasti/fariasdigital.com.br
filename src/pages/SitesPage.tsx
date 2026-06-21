import { Link } from 'react-router-dom'
import { PageMeta } from '../components/ui/PageMeta'
import { HeroHome } from '../components/sections/HeroHome'
import { MiniServices } from '../components/sections/MiniServices'
import { PackageGrid, ProcessSteps } from '../components/sections/PackageGrid'
import { CtaBand, SectionHeader } from '../components/sections/CtaBand'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'

export function SitesPage() {
  return (
    <>
      <PageMeta page="sites" />
      <HeroHome
        compact
        label="Pacotes e preços"
        titleLines={['Serviços, investimentos', 'e processo de entrega']}
        subtitle="Escopo fechado, SEO básico e WhatsApp integrado — do primeiro contato ao site no ar. MEI · Nota Fiscal · atendimento direto."
        showPreview={false}
        showPricingTags
        actions={
          <div className="hero__actions">
            <a href="#pacotes" className="btn btn--primary btn--lg">
              Ver pacotes
            </a>
            <WhatsAppButton waKey="site" className="btn btn--whatsapp btn--lg">
              Pedir orçamento
            </WhatsAppButton>
          </div>
        }
      />

      <section className="section section--alt section--glow">
        <div className="container">
          <SectionHeader
            eyebrow="// para quem é"
            title="Negócios locais que querem mais contato"
            lead="Lojas, clínicas, oficinas, imobiliárias, restaurantes e prestadores de serviço — quem depende de WhatsApp e indicação para vender."
          />
          <div className="service-grid">
            <AnimatedSection delay={1} className="service-card">
              <h3 className="service-card__title">O problema</h3>
              <p className="service-card__text">
                Instagram sozinho não basta. Cliente pesquisa no Google, compara e desconfia de quem não tem site ou parece amador.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={2} className="service-card">
              <h3 className="service-card__title">A solução</h3>
              <p className="service-card__text">
                Site, loja online ou landing com WhatsApp integrado: formulários que montam a mensagem, catálogo de produtos e automação básica de atendimento — tudo pensado para o celular do seu cliente.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section section--glow" id="servicos">
        <div className="container">
          <SectionHeader
            center
            eyebrow="Serviços"
            title={
              <>
                Soluções completas <span className="highlight">para o seu negócio</span>
              </>
            }
            lead="Do modelo pronto à loja online e integrações — escopo e investimento definidos no orçamento."
          />
          <MiniServices />
        </div>
      </section>

      <section className="section" id="pacotes">
        <div className="container">
          <SectionHeader
            center
            eyebrow="Pacotes"
            title={
              <>
                Escolha o pacote <span className="highlight">ideal</span>
              </>
            }
            lead="Investimento transparente desde o primeiro contato — retorno em até 24h."
          />
          <PackageGrid />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeader eyebrow="// como funciona" title="Do primeiro contato ao site no ar" />
          <ProcessSteps />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeader
            center
            eyebrow="Referências visuais"
            title="Quer ver o layout antes de contratar?"
            lead="Mais de 40 modelos por segmento no portfólio — pet shop, clínicas, lojas, turismo e muito mais. Landing pages personalizáveis a partir de R$ 300."
          />
          <AnimatedSection className="section__actions" style={{ textAlign: 'center' }}>
            <Link to="/portfolio/" className="btn btn--primary btn--lg">
              Abrir portfólio completo
            </Link>
            <WhatsAppButton waKey="pacoteLanding" className="btn btn--whatsapp btn--lg">
              Quero minha landing
            </WhatsAppButton>
          </AnimatedSection>
        </div>
      </section>

      <CtaBand
        title="Quer um site como estes para sua empresa?"
        text="Mande uma mensagem com o tipo do seu negócio — retorno em até 24h com pacote, prazo e investimento."
        waKey="site"
        buttonLabel="Solicitar orçamento no WhatsApp"
      />
    </>
  )
}
