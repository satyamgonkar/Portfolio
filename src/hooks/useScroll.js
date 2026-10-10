import { useEffect, useState } from 'react'

export default function useScroll() {
  const [s, setS] = useState({ y: 0, pct: 0 })
  useEffect(() => {
    const on = () => {
      const h = document.documentElement.scrollHeight - innerHeight
      setS({ y: scrollY, pct: h > 0 ? (scrollY / h) * 100 : 0 })
    }
    on()
    addEventListener('scroll', on, { passive: true })
    return () => removeEventListener('scroll', on)
  }, [])
  return s
}
