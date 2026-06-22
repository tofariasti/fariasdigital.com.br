import { Link } from 'react-router-dom'
import { PageMeta } from '../components/ui/PageMeta'
import { HeroHome } from '../components/sections/HeroHome'
import { FaqList } from '../components/sections/FaqList'
import { CtaBand } from '../components/sections/CtaBand'
import { useLocale } from '../i18n/LocaleContext'
import { uiCopy } from '../data/uiCopy'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'

export function FaqPage() {
  const { t, pathFor } = useLocale()

  return (
    <>
      <PageMeta page="faq" />
      <HeroHome
        compact
        label={t(uiCopy.faq.label)}
        titleLines={[t(uiCopy.faq.title1), t(uiCopy.faq.title2)]}
        subtitle={t(uiCopy.faq.subtitle)}
        showPreview={false}
      />

      <section className="section section--alt" id="faq">
        <div className="container">
          <FaqList />
          <AnimatedSection style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to={pathFor('/pacotes/')} className="btn btn--outline btn--lg">
              {t(uiCopy.cta.viewPackages)}
            </Link>
            <WhatsAppButton waKey="geral" className="btn btn--whatsapp btn--lg">
              {t(uiCopy.cta.whatsapp)}
            </WhatsAppButton>
          </AnimatedSection>
        </div>
      </section>

      <CtaBand
        title={t(uiCopy.faq.notFoundTitle)}
        text={t(uiCopy.faq.notFoundText)}
        buttonLabel={t(uiCopy.cta.chatWhatsApp)}
      />
    </>
  )
}
