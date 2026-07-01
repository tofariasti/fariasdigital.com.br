import { useHubConfig } from '../../i18n/useHubConfig'
import { useLocale } from '../../i18n/LocaleContext'
import { uiCopy } from '../../data/uiCopy'

interface SocialLinksProps {
  className?: string
}

export function SocialLinks({ className }: SocialLinksProps) {
  const config = useHubConfig()
  const { t } = useLocale()

  const items = [
    {
      href: config.links.instagramDrone,
      label: t(uiCopy.social.instagram),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      href: config.links.linkedin,
      label: t(uiCopy.social.linkedin),
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.5 8.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM5 9.5h3v10H5v-10zm5 0h2.9v1.4h.04c.4-.75 1.38-1.55 2.84-1.55 3.04 0 3.6 2 3.6 4.6v5.55h-3v-4.92c0-1.17-.02-2.68-1.63-2.68-1.64 0-1.89 1.28-1.89 2.6v4.99h-3V9.5z" />
        </svg>
      ),
    },
    {
      href: config.links.github,
      label: t(uiCopy.social.github),
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.11-1.48-1.11-1.48-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.36 1.11 2.94.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.74 0 0 .84-.27 2.75 1.05A9.2 9.2 0 0 1 12 6.84c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.42.2 2.48.1 2.74.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
        </svg>
      ),
    },
  ]

  return (
    <ul className={`social-links${className ? ` ${className}` : ''}`}>
      {items.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            className="social-links__item"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
          >
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  )
}
