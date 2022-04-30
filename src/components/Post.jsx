import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { AnimatePresence, motion } from 'framer-motion'
export default function Post({ data, dalay }) {
  const { description } = data
  const { title, date, thumbnail, path } = data.frontmatter
  const image = getImage(thumbnail)
  return (
    <AnimatePresence>
      <div
        className="w-full md:w-1/2 lg:w-1/3 px-4"
        // data-sal="zoom-in"
        // data-sal-delay={dalay}
        // data-sel-duration="3000"
        // data-sal-easing="ease-out-back"
      >
        <Link
          to={`/blog${path}`}
          className="max-w-[370px] mx-auto mb-10 block group"
        >
          <motion.div
            layoutId="img"
            initial={{ width: '100px' }}
            animate={{ width: '100%' }}
            exit={{ width: '100px' }}
            className="rounded overflow-hidden mb-8"
          >
            <GatsbyImage image={image} alt={title} className="w-full" />
          </motion.div>
          <div>
            <span className="bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb-5">
              {date}
            </span>
            <div className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark transition-colors transitio group-hover:text-primary">
              <h3>{title}</h3>
            </div>
            <motion.p layoutId="txt" className="text-base text-body-color">
              {description}
            </motion.p>
          </div>
        </Link>
      </div>
    </AnimatePresence>
  )
}
