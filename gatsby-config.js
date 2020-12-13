module.exports = {
  siteMetadata: {
    title: `Darwins Property Solutions`,
    description: `Darwins Property Solutions`,
    author: `Darwins Property Solutions`
  },
  plugins: [
    "gatsby-plugin-eslint",
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `1qq6mgrp27zi`,
        accessToken: `TJ8fupuhUoQU8t1QerFrg2MYhJihXJU23hyJDAJewro`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `darwins-property-solutions`,
        short_name: `darwins-property-solutions`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/logo2.png`
      }
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(`./tailwind.config.js`),
          require(`autoprefixer`),
          require(`cssnano`)
        ]
      }
    },
    `gatsby-plugin-offline`
  ]
};
