import { useHubConfig } from '../../i18n/useHubConfig'

interface StatsBarProps {
  className?: string
}

export function StatsBar({ className = '' }: StatsBarProps) {
  const config = useHubConfig()

  return (
    <div className={`stats-bar${className ? ` ${className}` : ''}`} role="list">
      {config.proofBar.map((item) => (
        <div key={item.label} className="stats-bar__item" role="listitem">
          <span className="stats-bar__value">
            {item.valor}
            {item.sufixo}
          </span>
          <span className="stats-bar__label">{item.label}</span>
        </div>
      ))}
    </div>
  )
}
