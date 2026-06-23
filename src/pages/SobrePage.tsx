import { PageMeta } from '../components/ui/PageMeta'
import { CredibilitySection } from '../components/sections/PortfolioSections'
import { CtaBand, SectionHeader } from '../components/sections/CtaBand'
import { useHubConfig } from '../i18n/useHubConfig'
import { useLocale } from '../i18n/LocaleContext'
import { uiCopy } from '../data/uiCopy'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'

export function SobrePage() {
  const config = useHubConfig()
  const { t } = useLocale()

  const aboutPoints = [
    {
      icon: (
        <>
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </>
      ),
      text: (
        <>
          <strong>{t(uiCopy.common.mei)}</strong> — {t(uiCopy.sobre.aboutMei)}{' '}
          <strong>{t(uiCopy.common.notaFiscal)}</strong>
        </>
      ),
    },
    {
      icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
      text: t(uiCopy.sobre.aboutExperience),
    },
    {
      icon: <path d="M12 2L2 7l10 5 10-5-10-5z" />,
      text: (
        <>
          {t(uiCopy.sobre.aboutDrone)} <strong>TechDrone360</strong>
        </>
      ),
    },
  ]

  const whyPoints = [
    { text: <><strong>{t(uiCopy.sobre.whyProposal)}</strong> — {t(uiCopy.sobre.whyProposalText)}</> },
    { text: <><strong>{t(uiCopy.sobre.whyDirect)}</strong> — {t(uiCopy.sobre.whyDirectText)}</> },
    { text: <><strong>{t(uiCopy.sobre.whyMobile)}</strong> — {t(uiCopy.sobre.whyMobileText)}</> },
    { text: <><strong>{t(uiCopy.sobre.whyRemote)}</strong> — {t(uiCopy.sobre.whyRemoteText)}</> },
  ]

  return (
    <>
      <PageMeta page="sobre" />
      <section className="hero hero--compact">
        <div className="container hero__grid">
          <div className="hero__content">
            <AnimatedSection>
              <p className="hero__eyebrow">
                <span className="hero__eyebrow-dot" />
                {t(uiCopy.common.whoAmI)}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={1}>
              <h1 className="hero__title">
                <span className="hero__title-line">{t(uiCopy.sobre.title1)}</span>
                <span className="hero__title-line hero__title-line--accent">{t(uiCopy.sobre.title2)}</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={2}>
              <p className="hero__subtitle">{t(uiCopy.sobre.subtitle)}</p>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={2} direction="right" className="about-card hero-aside">
            <h2 className="hero-aside__name">{config.nomeCompleto}</h2>
            <p className="hero-aside__role">
              {t(uiCopy.common.webDeveloper)} · {config.cidadeRegiao}
            </p>
            <ul className="hero-pills">
              {t(uiCopy.sobre.heroTags).map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container about-grid">
          <AnimatedSection direction="left" className="about-card">
            <img
              className="about-card__photo"
              src={config.fotoPerfil}
              alt={config.nomeCompleto}
              width={84}
              height={84}
              loading="lazy"
              decoding="async"
            />
            <h2 style={{ fontFamily: 'var(--font-display)', margin: '0 0 0.5rem' }}>
              {config.nomeCompleto}
            </h2>
            <p style={{ margin: 0, color: 'var(--color-muted)' }}>
              {t(uiCopy.common.webDeveloper)} · {config.cidadeRegiao}
            </p>
            <ul className="about-list">
              {aboutPoints.map((item) => (
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
            <h2 className="section__title">{t(uiCopy.common.whyWorkWithMe)}</h2>
            <p className="section__lead" style={{ marginBottom: '1.5rem' }}>
              {t(uiCopy.sobre.whyLead)}
            </p>
            <ul className="about-list">
              {whyPoints.map((item) => (
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
              <a href={config.links.portfolio} className="btn btn--outline" target="_blank" rel="noopener noreferrer">
                {t(uiCopy.common.technicalPortfolio)}
              </a>
              <a href={config.links.linkedin} className="btn btn--outline" target="_blank" rel="noopener noreferrer">
                {t(uiCopy.common.linkedin)}
              </a>
              <a href={config.links.github} className="btn btn--outline" target="_blank" rel="noopener noreferrer">
                {t(uiCopy.common.github)}
              </a>
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow={t(uiCopy.common.trajectory)}
            title={
              <>
                {t(uiCopy.portfolio.trajectoryTitleBefore)}
                <span className="highlight">{t(uiCopy.portfolio.trajectoryHighlight)}</span>
              </>
            }
          />
          <CredibilitySection />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeader eyebrow={t(uiCopy.common.contactEyebrow)} title={t(uiCopy.common.talkToMe)} />
          <div className="service-grid">
            <AnimatedSection delay={1} className="service-card">
              <h3 className="service-card__title">{t(uiCopy.common.whatsapp)}</h3>
              <p className="service-card__text">{t(uiCopy.common.fastestQuote)}</p>
              <p style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0 0 1rem' }}>
                {config.whatsappExibicao}
              </p>
              <WhatsAppButton waKey="geral">{t(uiCopy.cta.openConversation)}</WhatsAppButton>
            </AnimatedSection>
            <AnimatedSection delay={2} className="service-card">
              <h3 className="service-card__title">{t(uiCopy.common.email)}</h3>
              <p className="service-card__text">{t(uiCopy.common.formalProposals)}</p>
              <p style={{ margin: '0 0 1rem' }}>
                <a href={`mailto:${config.email}`}>{config.email}</a>
              </p>
              <a href={`mailto:${config.email}`} className="btn btn--outline">
                {t(uiCopy.cta.sendEmail)}
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CtaBand
        title={t(uiCopy.common.readyToStart)}
        text={t(uiCopy.common.readyToStartText)}
        buttonLabel={t(uiCopy.cta.chatWhatsApp)}
      />
    </>
  )
}
