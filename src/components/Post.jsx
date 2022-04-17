import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Post({ data }) {
  const { description } = data
  const { title, date, thumbnail } = data.frontmatter
  const image = getImage(thumbnail)

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
      <div className="max-w-[370px] mx-auto mb-10">
        <div className="rounded overflow-hidden mb-8">
          <GatsbyImage image={image} alt={title} className="w-full" />
        </div>
        <div>
          <span
            className="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
          >
            {date}
          </span>
          <h3>
            <a
              href="#"
              className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
            >
              {title}
            </a>
          </h3>
          <p className="text-base text-body-color">{description}</p>
        </div>
      </div>
    </div>
  )
}
