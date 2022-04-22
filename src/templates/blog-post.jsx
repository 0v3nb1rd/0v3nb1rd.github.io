import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

import { PostStyled, HighlightStyled } from './styled'

export default function BlogPost({ data }) {
  const { html } = data.markdownRemark
  const { title, thumbnail } = data.markdownRemark.frontmatter
  const image = getImage(thumbnail)
  return (
    <Layout mainClass="main--blog-post !mt-8">
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
            <div className="relative pt-[56.25%] overflow-hidden rounded-2xl">
              <GatsbyImage
                image={image}
                className="w-full h-full absolute inset-0 object-cover"
                alt={title}
              />
            </div>
          </div>

          <h1>{title}</h1>
          <HighlightStyled dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </PostStyled>
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
