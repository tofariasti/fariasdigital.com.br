import { useHubConfig } from '../../i18n/useHubConfig'
import { useLocale } from '../../i18n/LocaleContext'
import { uiCopy } from '../../data/uiCopy'

function IconGrid() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  )
}

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 3l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V7l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </svg>
  )
}

export function HeroTrustIcons() {
  const config = useHubConfig()
  const { t } = useLocale()

  const items = [
    { icon: <IconGrid />, label: t(uiCopy.hero.trustModels) },
    { icon: <IconClock />, label: t(uiCopy.hero.trustResponse) },
    { icon: <IconShield />, label: t(uiCopy.hero.trustMei) },
    { icon: <IconPhone />, label: t(uiCopy.hero.trustMobile) },
    { icon: null, label: config.cidadeRegiao },
  ]

  return (
    <ul className="hero-trust-icons">
      {items.map((item) => (
        <li key={item.label} className="hero-trust-icons__item">
          {item.icon && <span className="hero-trust-icons__icon">{item.icon}</span>}
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  )
}
