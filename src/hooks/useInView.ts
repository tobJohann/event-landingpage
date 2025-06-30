'use client'
import { useEffect, useRef } from 'react'
import { useAnimation, useInView as useInViewFramer } from 'motion/react'

type options = {
  once?: boolean
}

const useInView = (optionOverrides?: options) => {
  const options: options = {
    once: false,
    ...optionOverrides,
  }

  const ref = useRef(null)
  const controller = useAnimation()
  const inView = useInViewFramer(ref, { once: options.once })

  useEffect(() => {
    controller.start(inView ? 'show' : 'hidden')
  }, [inView, controller])

  return {
    controller,
    ref,
    inView,
  }
}
export default useInView
