import { motion } from 'framer-motion'
import './FloatingHearts.css'

const FloatingHearts = () => {
  const hearts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 40 + 20,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
    opacity: Math.random() * 0.5 + 0.3,
    rotation: Math.random() * 360
  }))

  return (
    <div className="floating-hearts-container">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity
          }}
          initial={{
            y: '100vh',
            rotate: 0,
            scale: 0
          }}
          animate={{
            y: '-100vh',
            rotate: [0, heart.rotation, -heart.rotation, 0],
            scale: [0, 1, 1, 0],
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0]
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
            rotate: {
              duration: heart.duration / 2,
              repeat: Infinity,
              ease: 'easeInOut'
            },
            x: {
              duration: heart.duration / 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingHearts
