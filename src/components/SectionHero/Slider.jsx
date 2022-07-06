import React from 'react'
import { motion } from 'framer-motion'

export const Slider = ({ className, children, ...props }) => {
  const faceCount = 14 // Counts of face images
  const [face, setFace] = React.useState(1)

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setFace((face) => {
        face === faceCount ? setFace(1) : setFace(face + 1)
      })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className={className}>
      <motion.img
        className="h-full mx-auto"
        src={`/BigHead/${face}.svg`}
        alt="Big head image"
        key={face}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      />
    </div>
  )
}
