import { useEffect, useState } from 'react'
import { store } from '../lib/storage'

export default function useTheme() {
  const [theme, setTheme] = useState(() => store.get('theme') || 'dark')
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    store.set('theme', theme)
  }, [theme])
  return [theme, () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))]
}
