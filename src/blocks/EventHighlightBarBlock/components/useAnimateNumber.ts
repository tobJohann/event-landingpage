'use client'
import { useEffect, useState } from 'react'
import { animate } from 'framer-motion'
import useInView from '@/hooks/useInView'

type useCounterOptions = {
  from: number
  to: number
  duration?: number
  fps?: number
}

const useAnimateNumber = ({ from, to, fps = 60, duration = 2000 }: useCounterOptions) => {
  const [value, setValue] = useState(from)
  const { ref, inView } = useInView()

  useEffect(() => {
    if (!inView) return

    const totalFrames = Math.round((duration / 1000) * fps)
    const increment = (to - from) / totalFrames
    let current = from
    let frame = 0

    const interval = setInterval(() => {
      frame++
      current += increment

      if (frame >= totalFrames) {
        setValue(to)
        clearInterval(interval)
      } else {
        setValue(Math.round(current))
      }
    }, 1000 / fps)

    return () => clearInterval(interval)
  }, [from, to, duration, fps, inView])
  return { value, ref }
}
export default useAnimateNumber
