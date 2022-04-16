/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/0v3nb1rd",
  siteMetadata: {
    title: "Ov3nb1rd - Front-end Stack Developer",
    description: "web dev portfolio",
    copiright: "© 2022",
    contacts: {
      adress: "pr. Svobody, Lviv, Ukraine",
      phone: "+380639911222",
      email: "0v3nb1rd@gmail.com",
    },
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp", // Needed for dynamic images
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `projects`,
        path: `${__dirname}/projects`,
      },
    },
  ],
}
