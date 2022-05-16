import React from 'react'
import { motion } from 'framer-motion'

export const Slider = ({ className, children, ...props }) => {
  const faceCount = 4 // Counts of face images
  const [face, setFace] = React.useState(1)

  React.useEffect(() => {
    setInterval(() => {
      setFace((face) => {
        face === faceCount ? setFace(1) : setFace(face + 1)
      })
    }, 1000)
  }, [])

  return (
    <div className={className}>
      <motion.img
        className="h-full mx-auto"
        src={`/BigHead/${1}.svg`}
        alt="Big head image"
        key={face}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      />
    </div>
  )
}
