import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Layout } from '../components'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'

import { PostStyled, HighlightStyled } from './styled'

export default function BlogPost({ data }) {
  console.log('rerender')
  const { html } = data.markdownRemark
  const { title, thumbnail } = data.markdownRemark.frontmatter
  const image = getImage(thumbnail)

  const [anime, setAnime] = React.useState(false)
  const clickTest = (e) => {
    setAnime(!anime)
    console.log(anime)
  }
  return (
    <>
      <AnimatePresence>
        <PostStyled className="my-8 relative ">
          <div className="relative -mx-4 top-0 pt-[17%] overflow-hidden">
            <GatsbyImage
              image={image}
              className="absolute inset-0 object-cover object-top w-full h-full filter blur"
              alt={title}
            />
          </div>
          <div className="container max-w-[50rem] mx-auto bg-white px-4">
            <div className="mt-[-20%] mb-8">
              <motion.div
                layoutId="img"
                initial={{ width: '100px' }}
                animate={{ width: '100%' }}
                exit={{ width: '100px' }}
                className="relative pt-[56.25%] overflow-hidden rounded-2xl"
              >
                <GatsbyImage
                  image={image}
                  className="w-full h-full absolute inset-0 object-cover"
                  alt={title}
                />
              </motion.div>
            </div>

            <h1>{title}</h1>
            <button
              className="btn btn-primary !mb-8 w-full"
              onClick={clickTest}
            >
              click me
            </button>
            <motion.div
              // initial={false}
              layoutId="txt"
              // initial={{ width: '100px' }}
              animate={{ x: [0, 100, 0] }}
              // initial={{ opacity: 0 }}
              // whileInView={{ opacity: 1 }}
              // viewport={{ once: true }}
            >
              <HighlightStyled dangerouslySetInnerHTML={{ __html: html }} />
            </motion.div>
          </div>
        </PostStyled>
      </AnimatePresence>
    </>
  )
}

export const postQuery = graphql`
  query postQuery($slug: String) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
