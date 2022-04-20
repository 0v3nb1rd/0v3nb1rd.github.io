const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(blog)/" } }) {
        nodes {
          frontmatter {
            path
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
      path: `/blog${node.frontmatter.path}`,
      component: path.resolve(`./src/templates/blog-post.jsx`),
      context: { slug: node.frontmatter.path },
    })
  })
}
