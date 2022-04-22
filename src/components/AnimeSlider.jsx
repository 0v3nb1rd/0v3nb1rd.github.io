import React from 'react'
import { motion } from 'framer-motion'

export default function AnimeSlider({ className, children, ...props }) {
  const faceLength = 4 // length of face images
  const [face, setFace] = React.useState(1)

  React.useEffect(() => {
    setInterval(() => {
      setFace((face, idx) => {
        face === faceLength ? setFace(1) : setFace(face + 1)
      })
    }, 1000)
  }, [])

  return (
    <div className={className}>
      <motion.img
        src={`/BigHead/${face}.svg`}
        alt="Big head image"
        key={face}
        // variants={variants}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.15 }}
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
