export function AmbientBackground() {
  return (
    <div className="ambient" aria-hidden="true">
      <div className="ambient__grid" />
      <div className="ambient__stars" />
      <div className="ambient__particles" />
      <div className="ambient__orb ambient__orb--1" />
      <div className="ambient__orb ambient__orb--2" />
      <div className="ambient__orb ambient__orb--3" />
      <div className="ambient__scan" />
    </div>
  )
}

export function ScrollProgress() {
  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress__bar" data-scroll-progress />
    </div>
  )
}
