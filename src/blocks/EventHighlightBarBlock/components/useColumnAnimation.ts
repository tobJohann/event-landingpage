'use client'
import useInView from '@/hooks/useInView'

const useColumnAnimation = () => {
  const { ref, controller } = useInView()

  const wrapperProps = {
    ref,
    animate: controller,
    variants: {
      show: { transition: { staggerChildren: 0.2 } },
    },
    initial: 'hidden',
  }

  const colProps = {
    variants: {
      show: { opacity: 1, y: 0, tranisition: { velocity: -200, stiffness: 1000 } },
      hidden: { opacity: 0, y: 10 },
    },
  }

  return {
    wrapper: wrapperProps,
    col: colProps,
  }
}
export default useColumnAnimation
