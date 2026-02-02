import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Confetti from 'react-confetti'
import FloatingHearts from './FloatingHearts'
import Balloons from './Balloons'
import './ValentineProposal.css'

const ValentineProposal = () => {
  const [answered, setAnswered] = useState(false)
  const [rotationCount, setRotationCount] = useState(0)
  const [showCelebration, setShowCelebration] = useState(false)

  const handleYes = () => {
    setAnswered(true)
    setShowCelebration(true)
  }

  const handleNo = () => {
    setRotationCount(prev => prev + 1)
  }

  return (
    <div className="valentine-container">
      <FloatingHearts />

      <AnimatePresence>
        {showCelebration && (
          <>
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              recycle={true}
              numberOfPieces={500}
              gravity={0.3}
            />
            <Balloons />
          </>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!answered ? (
          <motion.div
            key="question"
            className="question-card-wrapper"
            initial={{ scale: 0, rotateY: -180 }}
            animate={{
              scale: 1,
              rotateY: 0,
              rotateZ: rotationCount * 360
            }}
            exit={{ scale: 0, rotateY: 180, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              rotateZ: { duration: 1, ease: "easeInOut" }
            }}
          >
            <motion.div
              className="question-card"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.div
                className="card-content"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <motion.h1
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="question-title"
                >
                  Hey Quency! 💕
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="question-text"
                >
                  Will you be my Valentine?
                </motion.p>

                <motion.div
                  className="buttons-container"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <motion.button
                    className="btn btn-yes"
                    onClick={handleYes}
                    whileHover={{
                      scale: 1.2,
                      rotateY: 10,
                      boxShadow: "0 20px 60px rgba(255, 105, 180, 0.6)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    animate={{
                      boxShadow: [
                        "0 10px 30px rgba(255, 105, 180, 0.4)",
                        "0 15px 40px rgba(255, 105, 180, 0.6)",
                        "0 10px 30px rgba(255, 105, 180, 0.4)"
                      ]
                    }}
                    transition={{
                      boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    YES! 💝
                  </motion.button>

                  <motion.button
                    className="btn btn-no"
                    onClick={handleNo}
                    whileHover={{
                      scale: 1.1,
                      rotateY: -10
                    }}
                    whileTap={{
                      scale: 0.8,
                      rotate: 360
                    }}
                  >
                    No
                  </motion.button>
                </motion.div>

                {rotationCount > 0 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="hint-text"
                  >
                    Come on, you know you want to say yes! 😊
                  </motion.p>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="answer"
            className="celebration-container"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
          >
            <motion.div
              className="celebration-card"
              animate={{
                rotateY: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotateY: { duration: 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <motion.h1
                className="celebration-title"
                animate={{
                  scale: [1, 1.2, 1],
                  color: ["#ff1493", "#ff69b4", "#ff1493"]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                YESSS! 🎉
              </motion.h1>

              <motion.p
                className="celebration-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                This is going to be the best Valentine's Day ever!
              </motion.p>

              <motion.div
                className="hearts-burst"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                💕 💖 💝 💗 💓
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ValentineProposal
