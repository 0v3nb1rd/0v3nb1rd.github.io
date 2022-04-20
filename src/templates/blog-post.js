import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

// import './layout.css'
import './highlight.css'

export default function BlogPost({ data }) {
  const { html } = data.markdownRemark
  const { title, thumbnail } = data.markdownRemark.frontmatter
  const image = getImage(thumbnail)
  return (
    <Layout mainClass="main--blog-post">
      <div className="my-8 text-center">
        <h3>{title}</h3>
        <GatsbyImage image={image} alt={title} />
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </Layout>
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
