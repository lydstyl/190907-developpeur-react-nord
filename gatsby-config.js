module.exports = {
  siteMetadata: {
    siteUrl: "https://www.developpeur-react-nord.com",
    title: `Développeur React.js Nord`,
    description: `Création de votre web app ou site Internet rapide et performant. CV et Portfolio de Gabriel BRUN, developpeur JavaScript, React.js, Gatsby.js dans le Nord.`,
    author: `Gabriel BRUN`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.developpeur-react-nord.com",
        sitemap: "https://www.developpeur-react-nord.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/", disallow: ["/agenda", "/2"] }],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // output: `/some-other-sitemap.xml`,

        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`

        // exclude: ["/category/*", `/path/to/page`],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage(filter: {path: { regex: "/^/services/[a-z].*|^/$|^/portfolio/.*|^/cv/"}}) {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges
            // .filter(edge => edge.node.path !== "/agenda/")
            .map(edge => {
              if (edge.node.path.includes("/services")) {
                return {
                  url: site.siteMetadata.siteUrl + edge.node.path,
                  changefreq: `daily`,
                  priority: 0.9,
                }
              }

              if (edge.node.path.includes("/cv")) {
                return {
                  url: site.siteMetadata.siteUrl + edge.node.path,
                  changefreq: `weekly`,
                  priority: 0.7,
                }
              }

              // portfolio
              if (edge.node.path === "/") {
                return {
                  url: site.siteMetadata.siteUrl + edge.node.path,
                  changefreq: `weekly`,
                  priority: 0.6,
                }
              }
              if (edge.node.path.includes("/portfolio/")) {
                return {
                  url: site.siteMetadata.siteUrl + edge.node.path,
                  changefreq: `monthly`,
                  priority: 0.5,
                }
              }

              // other pages
              return {
                url: site.siteMetadata.siteUrl + edge.node.path,
                changefreq: `monthly`,
                priority: 0.1,
              }
            }),
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
        icon: `src/images/dev-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: `markdown-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-150201460-1",
      },
    },
  ],
}
