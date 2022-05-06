import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'

import { MPostStyled, HighlightStyled, ArticleDate } from './styled'

const m_txt = {
  hide: { opacity: 0, y: -200 },
  show: {
    opacity: 1,
    y: 0,
  },
  transition: { duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] },
}
const m_top = {
  hide: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
  },
}

export const BlogPost = ({ data }) => {
  const { html, timeToRead } = data.markdownRemark
  const { title, thumbnail, date } = data.markdownRemark.frontmatter
  const image = getImage(thumbnail)
  return (
    <MPostStyled
      initial="hide"
      animate="show"
      exit="hide"
      transition={{ staggerChildren: 0.2 }}
      className="my-8 relative"
    >
      <motion.div
        variants={m_txt}
        animate={{ opacity: 0 }}
        transition={'transition'}
        className="relative -mx-4 top-0 pt-[17%] overflow-hidden"
      >
        <GatsbyImage
          image={image}
          layout="constrained"
          className="!absolute inset-0 object-cover object-top w-full h-full filter blur"
          alt={title}
        />
      </motion.div>
      <motion.div
        initial="hide"
        animate="show"
        exit="hide"
        transition={{ staggerChildren: 0.1 }}
        className="container max-w-[50rem] mx-auto bg-white px-4"
      >
        <motion.div variants={m_top} className="mt-[-20%] mb-8">
          <div className="relative pt-[56.25%] overflow-hidden rounded-2xl">
            <GatsbyImage
              image={image}
              className="!absolute w-full h-full inset-0 object-cover"
              alt={title}
            />
          </div>
        </motion.div>
        <motion.div variants={m_top}>
          <h1>{title}</h1>
          <ArticleDate>
            <i>{date} -</i>
            <i>{timeToRead} min read</i>
          </ArticleDate>
          <HighlightStyled dangerouslySetInnerHTML={{ __html: html }} />
        </motion.div>
      </motion.div>
    </MPostStyled>
  )
}

export const postQuery = graphql`
  query postQuery($slug: String) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        thumbnail {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

export default BlogPost
