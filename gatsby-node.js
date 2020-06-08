const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query getAllBlogSlugs {
      blogPosts: allContentfulBlogPost {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.blogPosts.nodes.forEach(post => {
    createPage({
      path: `/blog/${post.slug}`,
      component: path.resolve(`src/templates/blogTemplate.jsx`),
      context: {
        slug: post.slug,
      },
    })
  })
}
