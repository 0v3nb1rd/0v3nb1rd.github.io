import React from "react"
import Layout from "../components/Layout"
import Post from "../components/Post"
import { graphql } from "gatsby"

export default function blog({ data }) {
  const blog = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <section className="py-8">
        <div className="container relative">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                <span className="font-semibold text-lg text-primary mb-2 block">
                  Our Blogs
                </span>
                <h2
                  className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                >
                  Our Recent News
                </h2>
                <p className="text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            {blog.map(item => (
              <Post key={item.id} data={item} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
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
