module.exports = {
  siteMetadata: {
    title: `Orions Media Agency June Michaels Portfolio`,
    description: `Hi I'm June Michaels. Let's create and build your dream together.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
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
        background_color: `#F26A2E`,
        theme_color: `#F26A2E`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins-Black`,
            // `source sans \pro:300,400,400i,700,900`
        ],
        display: 'swap'
      },
      options: {
        fonts: [
          `Poppins`,
             `source sans \pro:900`
        ],
        display: 'swap'
      }
      
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
