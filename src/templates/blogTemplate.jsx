import React from "react"
import { graphql } from "gatsby"
import { Typography } from "@material-ui/core"
import Layout from "../components/Layout/Layout"

export const data = graphql`
  query getSingleBlogpost($slug: String) {
    blogPost: contentfulBlogPost(slug: { eq: $slug }) {
      title
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      date(formatString: "MMMM Do, YYYY")
      author
      content {
        content
      }
    }
  }
`

const blogTemplate = ({ data }) => {
  const {
    title,
    author,
    date,
    image: { fluid },
    content: { content },
  } = data.blogPost
  return (
    <Layout>
      <Typography variant="h2">{title}</Typography>
    </Layout>
  )
}

export default blogTemplate
