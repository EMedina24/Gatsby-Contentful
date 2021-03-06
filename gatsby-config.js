module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [

             {                              
             resolve: `gatsby-theme-shopify-manager`,
              options: {
              shopName: `echelon-store`,
              accessToken: `b785f4ee1f8ba77ab66dce258f1b4b8b`,
              //shouldConfigureSourcePlugin: true, // default
              //shouldWrapRootElementWithProvider: true, // default
              },
            },
             {
            resolve: `gatsby-source-contentful`,
            options: {
              spaceId: "8hr0ubgnvd6h",
              accessToken: "E4G0paRPxXt8m8AyjK5n6I_CZQvKRoPfWfHPqdzldCc",
            },
           }, 


    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
