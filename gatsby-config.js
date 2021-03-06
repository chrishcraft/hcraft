module.exports = {
  siteMetadata: {
    title: `Home Craft`,
    description: `A small, residential drafting and design firm based in Kelowna, BC, offering services primarily in the Okanagan and Southern Ontario. We focus on contemporary style homes where your needs and desires are combined with a function forward design principle. Our work is primarily new home design, additions, and renovations.`,
    author: `Chris Skomorowski`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: `${__dirname}/src/components/layout.js`,
        },
        plugins: [ `gatsby-remark-images` ], 
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1500,
              withWebp: true,
              quality: 80,
              showCaptions: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "portfolio",
        path: `${__dirname}/src/portfolio`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Roboto"],
        },
        custom: {
          families: ["BigNoodleTitling"],
          urls: ["fonts.css"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Home Craft`,
        short_name: `hcraft`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/homecraft-logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
