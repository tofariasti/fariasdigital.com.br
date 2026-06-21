import { useEffect } from 'react'

export function useScrollProgress() {
  useEffect(() => {
    const bar = document.querySelector<HTMLElement>('[data-scroll-progress]')
    if (!bar) return

    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      bar.style.width = `${progress}%`
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}
