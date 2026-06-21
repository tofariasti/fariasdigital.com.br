import { PageMeta } from '../components/ui/PageMeta'
import { HeroHome } from '../components/sections/HeroHome'
import { SectionHeader } from '../components/sections/CtaBand'
import { hubConfig } from '../data/hubConfig'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'

const DRONE_SERVICES = [
  {
    title: 'Imóveis e loteamentos',
    text: 'Mostre terreno, fachada, vizinhança e potencial da área — o que foto no chão não transmite.',
  },
  {
    title: 'Airbnb e turismo',
    text: 'Anúncio com entorno, acesso e clima do bairro — menos dúvida do hóspede, mais reservas.',
  },
  {
    title: 'Obras e empresas',
    text: 'Registre evolução da obra ou crie conteúdo premium para feed e apresentações comerciais.',
  },
  {
    title: 'Eventos',
    text: 'Vistas aéreas memoráveis que ampliam a experiência do público e do organizador.',
  },
]

const TRUST_ITEMS = [
  'Equipamento DJI Mini 3 — imagens estáveis e nítidas',
  'Voos planejados conforme ANAC, DECEA e condições de segurança',
  'MEI com emissão de Nota Fiscal',
  'Referências: Auxiliadora Predial, Clipes Imóveis, Ápice Incorporadora',
]

export function DronePage() {
  const pkg = hubConfig.pacoteDrone

  return (
    <>
      <PageMeta page="drone" />
      <HeroHome
        compact
        label="TechDrone360"
        titleLines={['Fotos e vídeos aéreos que', 'vendem o lugar']}
        subtitle="Imóveis, Airbnb, obras, hotéis e eventos — captação profissional com drone DJI que mostra escala, entorno e sensação do local."
        showPreview={false}
        actions={
          <div className="hero__actions">
            <a
              href={hubConfig.links.techdrone360}
              className="btn btn--primary btn--lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver portfólio completo
            </a>
            <WhatsAppButton waKey="drone" className="btn btn--whatsapp btn--lg">
              Pedir orçamento
            </WhatsAppButton>
          </div>
        }
      />

      <section className="section section--alt">
        <div className="container">
          <AnimatedSection className="drone-hero-card">
            <h2 className="drone-hero-card__title">Operação TechDrone360</h2>
            <p>
              O site completo com vídeos, portfólio, FAQ e referências de clientes está em{' '}
              <strong>techdrone360.com.br</strong> — marca dedicada à captação aérea profissional.
            </p>
            <div className="hero__actions" style={{ marginBottom: 0 }}>
              <a
                href={hubConfig.links.techdrone360}
                className="btn btn--outline btn--lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir TechDrone360
              </a>
              <a
                href={hubConfig.links.youtubeDrone}
                className="btn btn--outline btn--lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Canal no YouTube
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="// serviços" title="Para quem é a captação aérea" />
          <div className="service-grid">
            {DRONE_SERVICES.map((item, i) => (
              <AnimatedSection key={item.title} delay={i + 1} className="service-card">
                <h3 className="service-card__title">{item.title}</h3>
                <p className="service-card__text">{item.text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="pacote-drone">
        <div className="container">
          <SectionHeader
            center
            eyebrow="// pacote de entrada"
            title="Drone Imóvel"
            lead="Referência para imobiliárias e corretores. Valor final conforme local e complexidade."
          />
          <AnimatedSection
            delay={1}
            className="package-card package-card--featured"
            style={{ maxWidth: 480, marginInline: 'auto' }}
          >
            <h3 className="package-card__name">{pkg.nome}</h3>
            <p className="package-card__price">{pkg.preco}</p>
            <p className="package-card__audience">{pkg.publico}</p>
            <ul className="package-card__list">
              {pkg.inclui.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="package-card__note">
              Deslocamento, autorizações especiais (SARPAS) e complexidade do local podem alterar o valor — informe o endereço no orçamento.
            </p>
            <WhatsAppButton waKey="pacoteDrone" className="btn btn--whatsapp btn--block">
              Pedir orçamento
            </WhatsAppButton>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="// confiança" title="Por que contratar" />
          <AnimatedSection delay={1}>
            <ul
              className="trust-bar"
              style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.85rem' }}
            >
              {TRUST_ITEMS.map((item) => (
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
            <h2 className="cta-band__title">Veja o resultado antes de decidir</h2>
          </AnimatedSection>
          <AnimatedSection delay={1}>
            <p className="cta-band__text">
              Captação profissional 4K com operador certificado — retorno em até 24h, Nota Fiscal e material pronto para anunciar.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={2} className="hero__actions" style={{ justifyContent: 'center', marginBottom: 0 }}>
            <a
              href={hubConfig.links.techdrone360}
              className="btn btn--outline btn--lg"
              style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              techdrone360.com.br
            </a>
            <WhatsAppButton waKey="drone" className="btn btn--whatsapp btn--lg">
              WhatsApp
            </WhatsAppButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
