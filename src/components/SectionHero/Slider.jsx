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
        src={`/BigHead/${face}.svg`}
        alt="Big head image"
        key={face}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        // variants={variants}
        // exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      />
    </div>
  )
}

// export const variants = {
//   hide: {
//     y: -20,
//     opacity: 0,
//     transition: {
//       // ease: 'easeIn',
//       duration: 0.3,
//     },
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       // ease: 'easeOut',
//       duration: 0.15,
//     },
//   },
// }
