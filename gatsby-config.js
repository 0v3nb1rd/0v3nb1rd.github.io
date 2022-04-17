module.exports = {
  pathPrefix: "",
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
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "default title",
        short_name: "short name",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "minimal-ui",
        icon: "./static/logo.svg",
      },
    },
    "gatsby-plugin-offline",
  ],
}
