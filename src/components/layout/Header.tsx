import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useHubConfig } from '../../i18n/useHubConfig'
import { useLocale } from '../../i18n/LocaleContext'
import { LOCALES, type Locale } from '../../i18n/types'
import { uiCopy } from '../../data/uiCopy'
import { WhatsAppButton } from '../ui/WhatsAppButton'

function Logo() {
  const config = useHubConfig()
  const { pathFor } = useLocale()
  const marca = config.marca
  const parts = marca.trim().split(/\s+/)

  return (
    <Link to={pathFor('/')} className="logo" aria-label={config.marcaLogoAlt}>
      <img
        src={config.marcaLogoIcon}
        alt=""
        className="logo__icon"
        width={32}
        height={32}
        aria-hidden="true"
      />
      <span className="logo__text">
        {parts.length > 1 ? (
          <>
            <span className="logo__text-brand">{parts[0]}</span>{' '}
            <span className="logo__text-accent">{parts.slice(1).join(' ')}</span>
          </>
        ) : (
          marca
        )}
      </span>
    </Link>
  )
}

function LangSwitcher({ onSelect }: { onSelect?: () => void }) {
  const { t, locale, setLocale } = useLocale()

  return (
    <div className="lang-switch" role="group" aria-label={t(uiCopy.lang.group)}>
      {LOCALES.map((lang) => (
        <button
          key={lang}
          type="button"
          className={`lang-btn${locale === lang ? ' lang-btn--active' : ''}`}
          aria-pressed={locale === lang}
          onClick={() => {
            setLocale(lang as Locale)
            onSelect?.()
          }}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t, pathFor } = useLocale()
  const config = useHubConfig()

  const navItems = [
    { to: pathFor('/'), label: t(uiCopy.nav.home), end: true },
    { to: pathFor('/sites/'), label: t(uiCopy.nav.packages) },
    { to: pathFor('/portfolio/'), label: t(uiCopy.nav.portfolio) },
    { to: pathFor('/faq/'), label: t(uiCopy.nav.faq) },
    { to: config.links.techdrone360, label: t(uiCopy.nav.drone), external: true as const },
    { to: pathFor('/sobre/'), label: t(uiCopy.nav.about) },
  ]

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Logo />
        <nav className="site-header__nav" aria-label={t(uiCopy.nav.home)}>
          <ul className="site-nav">
            {navItems.map((item) => (
              <li key={item.label}>
                {'external' in item && item.external ? (
                  <a href={item.to} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                ) : (
                  <NavLink to={item.to} end={'end' in item ? item.end : false} className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="site-header__actions">
          <LangSwitcher />
          <WhatsAppButton waKey="geral" className="btn btn--whatsapp site-header__whatsapp">
            {t(uiCopy.cta.chat)}
          </WhatsAppButton>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="sr-only">{t(uiCopy.cta.menu)}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
      <div className={`container mobile-nav${mobileOpen ? ' is-open' : ''}`} id="mobile-nav">
        {navItems.map((item) =>
          'external' in item && item.external ? (
            <a
              key={item.label}
              href={item.to}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ) : (
            <NavLink
              key={item.label}
              to={item.to}
              end={'end' in item ? item.end : false}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </NavLink>
          ),
        )}
        <WhatsAppButton waKey="geral" className="btn btn--whatsapp btn--block">
          {t(uiCopy.cta.chat)}
        </WhatsAppButton>
      </div>
    </header>
  )
}
