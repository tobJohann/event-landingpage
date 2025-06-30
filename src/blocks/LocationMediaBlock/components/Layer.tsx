import { motion } from 'motion/react'

type Props = {
  width: number
  index: number
}

const Layer: React.FC<Props> = ({ width, index }) => {
  const variants = {
    show: {
      x: 0,
      opacity: 1,
    },
    hidden: {
      x: -200,
      opacity: 0,
    },
  }

  return (
    <motion.div
      variants={variants}
      transition={{
        velocity: -200,
        stiffness: 1000,
      }}
      style={{
        transformOrigin: 'bottom left',
        skewX: `-${15 * (index + 1) * 0.5}deg`,
        width: `${width * 2}%`,
        background:
          'linear-gradient(90deg, rgba(103, 157, 56, 0.8) 10.32%, rgba(195, 190, 45, 0.4) 100%)',
        position: 'absolute',
        top: 0,
        left: `-${width}%`,
        height: '100%',
      }}
    />
  )
}
export default Layer
