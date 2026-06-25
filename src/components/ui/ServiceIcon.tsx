interface ServiceIconProps {
  id: string
  className?: string
}

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export function ServiceIcon({ id, className }: ServiceIconProps) {
  const svgClass = className ?? ''

  switch (id) {
    case 'landing-painel':
      return (
        <svg {...iconProps} className={svgClass}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 4v5" />
          <path d="M8 14h3M8 17h5" />
        </svg>
      )
    case 'landing':
      return (
        <svg {...iconProps} className={svgClass}>
          <path d="M4 20V8l8-5 8 5v12" />
          <path d="M9 20v-6h6v6" />
        </svg>
      )
    case 'institucional':
      return (
        <svg {...iconProps} className={svgClass}>
          <path d="M4 21V9l8-4 8 4v12" />
          <path d="M9 21v-6h6v6M9 9h.01M15 9h.01M9 13h.01M15 13h.01" />
        </svg>
      )
    case 'ecommerce':
      return (
        <svg {...iconProps} className={svgClass}>
          <path d="M6 6h15l-1.5 9H7.5L6 6z" />
          <path d="M6 6 5 3H2" />
          <circle cx="9" cy="20" r="1" />
          <circle cx="18" cy="20" r="1" />
        </svg>
      )
    case 'whatsapp':
      return (
        <svg {...iconProps} className={svgClass}>
          <path d="M21 11.5a8.5 8.5 0 0 1-12.9 7.3L3 21l2.2-5.1A8.5 8.5 0 1 1 21 11.5z" />
          <path d="M8.5 10.5c.5 2 2.5 4 4.5 4.5l1.5-1.5" />
        </svg>
      )
    case 'integracoes':
      return (
        <svg {...iconProps} className={svgClass}>
          <path d="M8 9 4 12l4 3M16 9l4 3-4 3" />
          <path d="M14 4 10 20" />
        </svg>
      )
    case 'drone':
      return (
        <svg {...iconProps} className={svgClass}>
          <path d="M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          <path d="M4 8 2 6M22 8l2-2M4 16l-2 2M22 16l2 2" />
          <path d="M6 6h2M16 6h2M6 18h2M16 18h2" />
        </svg>
      )
    case 'computadores':
      return (
        <svg {...iconProps} className={svgClass}>
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M8 20h8M12 16v4" />
          <path d="M7 9h4M7 12h6" />
        </svg>
      )
    default:
      return (
        <svg {...iconProps} className={svgClass}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4l3 2" />
        </svg>
      )
  }
}
