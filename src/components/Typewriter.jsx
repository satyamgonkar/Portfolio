import { useState, useEffect } from 'react'

export default function Typewriter({ words = [] }) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    if (!words.length) return

    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1500)
      return () => clearTimeout(timeout)
    }

    if (subIndex === 0 && reverse) {
      setReverse(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1))
    }, reverse ? 45 : 85)

    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse, words])

  if (!words.length) return null

  return (
    <span className="typewriter-wrap">
      <span className="typewriter-text">{words[index].substring(0, subIndex)}</span>
      <span className="typewriter-caret">|</span>
    </span>
  )
}
