import { useHubConfig } from '../../i18n/useHubConfig'

export function CredibilityStrip() {
  const config = useHubConfig()
  const stats = config.comparativoInstagram.stats.slice(0, 3)

  return (
    <section className="credibility-strip">
      <div className="container">
        <div className="credibility-strip__grid">
          {stats.map((stat) => (
            <div key={stat.texto} className="credibility-strip__card">
              <strong>
                {stat.valor}
                {stat.sufixo}
              </strong>
              <span>{stat.texto}</span>
              <cite className="credibility-strip__source">{stat.fonte}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
