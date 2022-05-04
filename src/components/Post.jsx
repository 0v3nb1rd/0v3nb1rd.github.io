import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
// import { AnimatePresence, motion } from 'framer-motion'
export const Post = ({ data, dalay, ...props }) => {
  const { description } = data
  const { title, date, thumbnail, path } = data.frontmatter
  const image = getImage(thumbnail)
  return (
    <div {...props} className="w-full md:w-1/2 lg:w-1/3 px-4">
      <Link
        to={`/blog${path}`}
        className="max-w-[380px] mx-auto mb-8 block group "
      >
        <div className="rounded overflow-hidden delay-75 transition-all duration-100 ease-in-out group-hover:scale-110">
          <GatsbyImage image={image} alt={title} className="w-full" />
        </div>
        <div className="-mt-4 relative z-10">
          <span className="flex bg-primary rounded text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb-2">
            {date}
          </span>
          <div className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-1 inline-block text-dark transition-colors duration-100 ease-in-out group-hover:text-secondary ">
            <h3 className="leading-6">{title}</h3>
          </div>
          <p className="leading-5 text-base text-body-color">{description}</p>
        </div>
      </Link>
    </div>
  )
}
