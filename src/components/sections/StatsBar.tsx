import { useHubConfig } from '../../i18n/useHubConfig'

interface StatsBarProps {
  className?: string
}

export function StatsBar({ className = '' }: StatsBarProps) {
  const config = useHubConfig()

  return (
    <ul className={`stats-bar${className ? ` ${className}` : ''}`}>
      {config.heroStats.map((item) => (
        <li key={item.label} className="stats-bar__item">
          <span className="stats-bar__value">
            {item.valor}
            {item.sufixo}
          </span>
          <span className="stats-bar__label">{item.label}</span>
        </li>
      ))}
    </ul>
  )
}
