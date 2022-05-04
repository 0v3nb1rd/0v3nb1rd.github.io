import React from 'react'
import { graphql } from 'gatsby'
import { Post } from '../components'
import { motion } from 'framer-motion'
import { MFullSection } from '../styles/styled'

const m_txt = {
  hide: { opacity: 0, y: -200 },
  show: {
    opacity: 1,
    y: 0,
  },
}
const m_top = {
  hide: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
  },
}

export const blog = ({ data }) => {
  const blog = data.allMarkdownRemark.nodes

  return (
    <MFullSection
      initial="hide"
      animate="show"
      exit="hide"
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="container">
        <motion.div
          variants={m_txt}
          className="flex flex-wrap justify-center -mx-4 mt-32"
        >
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-12 max-w-[510px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                Blog
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                My Recent Blog News
              </h2>
              <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={m_top}
          className="flex items-center flex-wrap -mx-4"
        >
          {blog.map((item, idx) => (
            <Post key={item.id} data={item} custom={idx} />
          ))}
        </motion.div>
      </div>
    </MFullSection>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/(blog)/" } }
    ) {
      nodes {
        id
        description: excerpt(pruneLength: 120)
        frontmatter {
          date(formatString: "MMM D, YYYY")
          title
          path
          id
          tags
          thumbnail {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`

export default blog
