import { motion } from 'framer-motion'
import './Balloons.css'

const Balloons = () => {
  const balloonColors = [
    '#ff1493',
    '#ff69b4',
    '#ff6b9d',
    '#ee4c7c',
    '#c06c84',
    '#ff4081',
    '#f48fb1',
    '#ff80ab'
  ]

  const balloons = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 3,
    color: balloonColors[Math.floor(Math.random() * balloonColors.length)],
    size: Math.random() * 30 + 40,
    swingAmount: Math.random() * 30 + 20
  }))

  return (
    <div className="balloons-container">
      {balloons.map((balloon) => (
        <motion.div
          key={balloon.id}
          className="balloon-wrapper"
          style={{
            left: `${balloon.left}%`
          }}
          initial={{
            y: '100vh',
            scale: 0,
            rotate: 0
          }}
          animate={{
            y: '-120vh',
            scale: [0, 1, 1.1, 1],
            rotate: [-10, 10, -10],
            x: [
              0,
              balloon.swingAmount,
              -balloon.swingAmount,
              balloon.swingAmount,
              0
            ]
          }}
          transition={{
            duration: balloon.duration,
            delay: balloon.delay,
            ease: 'easeOut',
            rotate: {
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            },
            x: {
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }
          }}
        >
          <div className="balloon-group">
            <motion.div
              className="balloon"
              style={{
                backgroundColor: balloon.color,
                width: `${balloon.size}px`,
                height: `${balloon.size * 1.2}px`
              }}
              animate={{
                scale: [1, 1.05, 1],
                rotateZ: [-2, 2, -2]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <div className="balloon-shine" />
              <div className="balloon-reflection" />
            </motion.div>
            <div
              className="balloon-string"
              style={{
                height: `${balloon.size * 2}px`
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Balloons
