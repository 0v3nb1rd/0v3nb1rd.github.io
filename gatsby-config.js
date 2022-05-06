module.exports = {
  pathPrefix: '',
  siteMetadata: {
    title: 'Ov3nb1rd - Front-end Stack Developer',
    description: 'web dev portfolio',
    contacts: {
      adress: 'pr. Svobody, Lviv, Ukraine',
      phone: '+380639911222',
      email: '0v3nb1rd@gmail.com',
    },
    socials: {
      facebook: 'https://facebook.com/0v3nb1rd',
      instagram: 'https://instagram.com/0v3nb1rd',
      telegram: 'https://t.me/ov3nb1rd',
      github: 'https://github.com/0v3nb1rd',
      linkedin: 'https://linkedin.com/in/0v3nb1rd',
    },
  },
  plugins: [
    // `gatsby-plugin-transition-link`,
    'gatsby-plugin-styled-components',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp', // Needed for dynamic images
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        once: true, // Defines if animation needs to be launched once
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `projects`,
        path: `${__dirname}/projects`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1080,
              linkImagesToOriginal: true,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'default title',
        short_name: 'short name',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'minimal-ui',
        icon: './static/logo.svg',
      },
    },
    'gatsby-plugin-offline',
  ],
}
