require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.developpeur-react-nord.com",
    title: "Développeur React Nord",
    description:
      "Portfolio et CV de Gabriel BRUN, developpeur JavaScript, ReactJS, Node, Gatsby, Strapi dans le Nord (département 59) disponible à temps partiel pour une mission dans l'univers JS. Création de web app ou site Internet.",
    author: "Gabriel BRUN",
    // googleSiteVerification: "zzYpDzeLpBLpBdkCaE791aFMXawx9MY73LrKoc14pLE",
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
      resolve: "gatsby-plugin-sitemap",
      options: {
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
          allSitePage.edges.map(edge => {
            if (edge.node.path.includes("/services")) {
              return {
                url: site.siteMetadata.siteUrl + edge.node.path,
                changefreq: "daily",
                priority: 0.9,
              }
            }

            if (edge.node.path.includes("/cv")) {
              return {
                url: site.siteMetadata.siteUrl + edge.node.path,
                changefreq: "weekly",
                priority: 0.7,
              }
            }

            // portfolio
            if (edge.node.path === "/") {
              return {
                url: site.siteMetadata.siteUrl + edge.node.path,
                changefreq: "weekly",
                priority: 0.6,
              }
            }
            if (edge.node.path.includes("/portfolio/")) {
              return {
                url: site.siteMetadata.siteUrl + edge.node.path,
                changefreq: "monthly",
                priority: 0.5,
              }
            }

            // other pages
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: "monthly",
              priority: 0.1,
            }
          }),
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/why_logo/logo.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-netlify-cms",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: "markdown-pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-150201460-1",
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1078,
            },
          },
          "gatsby-remark-copy-linked-files",
          {
            resolve: "@raae/gatsby-remark-oembed",
            options: {
              usePrefix: ["oembed", "video"],
              providers: {
                exclude: ["Reddit"],
              },
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        // apiURL: 'https://auxfruitiers.herokuapp.com',
        contentTypes: ["skill", "certificat"],
        singleTypes: ["about"],
        queryLimit: 1000,
      },
    },
  ],
}
