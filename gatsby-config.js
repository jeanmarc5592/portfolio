require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Frontend Developer Portfolio`,
    description: `Showcasing myself as a Frontend Developer`,
    author: `Jean-Marc Möckel`,
  },
  plugins: [
    "gatsby-plugin-material-ui",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `texts`,
        path: `${__dirname}/src/texts/`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "l94qvh3vyfhu",
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
  ],
}
