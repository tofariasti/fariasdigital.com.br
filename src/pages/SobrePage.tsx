import { PageMeta } from '../components/ui/PageMeta'
import { CredibilitySection } from '../components/sections/PortfolioSections'
import { CtaBand, SectionHeader } from '../components/sections/CtaBand'
import { hubConfig } from '../data/hubConfig'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'

const ABOUT_POINTS = [
  {
    icon: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </>
    ),
    text: (
      <>
        <strong>MEI</strong> — Microempreendedor Individual com emissão de <strong>Nota Fiscal</strong>
      </>
    ),
  },
  {
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    text: 'Mais de 10 anos em times de desenvolvimento — agronegócio, saúde, governo e varejo',
  },
  {
    icon: <path d="M12 2L2 7l10 5 10-5-10-5z" />,
    text: (
      <>
        Operador certificado de drone DJI — marca <strong>TechDrone360</strong>
      </>
    ),
  },
]

const WHY_POINTS = [
  { text: <><strong>Proposta clara</strong> — escopo, prazo e investimento definidos antes de começar</> },
  { text: <><strong>Contato direto</strong> — WhatsApp comigo, sem passar por vendedor</> },
  { text: <><strong>Sites que funcionam no celular</strong> — onde seu cliente realmente está</> },
  { text: <><strong>Atendimento remoto</strong> — projetos para todo o Brasil, com comunicação direta pelo WhatsApp</> },
]

export function SobrePage() {
  return (
    <>
      <PageMeta page="sobre" />
      <section className="hero hero--compact">
        <div className="container">
          <AnimatedSection>
            <p className="hero__eyebrow">
              <span className="hero__eyebrow-dot" />
              Quem sou
            </p>
          </AnimatedSection>
          <AnimatedSection delay={1}>
            <h1 className="hero__title">
              <span className="hero__title-line">Atendimento direto,</span>
              <span className="hero__title-line hero__title-line--accent">trabalho sério</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={2}>
            <p className="hero__subtitle">
              Desenvolvedor web sênior com mais de 10 anos em times de produto e sistemas corporativos — Laravel, APIs e integrações — além de operador certificado de drone. Você fala comigo do orçamento à entrega, com Nota Fiscal.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container about-grid">
          <AnimatedSection direction="left" className="about-card">
            <div className="about-card__initials" aria-hidden="true">
              TF
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', margin: '0 0 0.5rem' }}>
              {hubConfig.nomeCompleto}
            </h2>
            <p style={{ margin: 0, color: 'var(--color-muted)' }}>
              Desenvolvedor web · {hubConfig.cidadeRegiao}
            </p>
            <ul className="about-list">
              {ABOUT_POINTS.map((item) => (
                <li key={String(item.text)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    {item.icon}
                  </svg>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <h2 className="section__title">Por que trabalhar comigo</h2>
            <p className="section__lead" style={{ marginBottom: '1.5rem' }}>
              Não sou agência grande com intermediários. Sou profissional técnico com experiência em agronegócio, saúde, governo, pagamentos e SaaS — em projetos corporativos contribuí com APIs, integrações e módulos críticos; na Farias Digital, entrego sites, landing pages e e-commerce direto para PMEs.
            </p>
            <ul className="about-list">
              {WHY_POINTS.map((item) => (
                <li key={String(item.text)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <p style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a href={hubConfig.links.portfolio} className="btn btn--outline" target="_blank" rel="noopener noreferrer">
                Portfólio técnico
              </a>
              <a href={hubConfig.links.linkedin} className="btn btn--outline" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={hubConfig.links.github} className="btn btn--outline" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Trajetória"
            title={
              <>
                Experiência em equipe que <span className="highlight">sustenta cada entrega</span>
              </>
            }
          />
          <CredibilitySection />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeader eyebrow="// contato" title="Fale comigo" />
          <div className="service-grid">
            <AnimatedSection delay={1} className="service-card">
              <h3 className="service-card__title">WhatsApp</h3>
              <p className="service-card__text">Forma mais rápida para orçamento de site ou captação com drone.</p>
              <p style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0 0 1rem' }}>
                {hubConfig.whatsappExibicao}
              </p>
              <WhatsAppButton waKey="geral">Abrir conversa</WhatsAppButton>
            </AnimatedSection>
            <AnimatedSection delay={2} className="service-card">
              <h3 className="service-card__title">E-mail</h3>
              <p className="service-card__text">Para propostas formais ou envio de documentos.</p>
              <p style={{ margin: '0 0 1rem' }}>
                <a href={`mailto:${hubConfig.email}`}>{hubConfig.email}</a>
              </p>
              <a href={`mailto:${hubConfig.email}`} className="btn btn--outline">
                Enviar e-mail
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CtaBand
        title="Pronto para começar?"
        text="Conte seu projeto — retorno com a melhor forma de ajudar."
        buttonLabel="Chamar no WhatsApp"
      />
    </>
  )
}
