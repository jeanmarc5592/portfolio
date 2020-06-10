import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import RichText from "@madebyconnor/rich-text-to-jsx"
import { Typography, Container } from "@material-ui/core"
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
        json
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
    content: { json },
  } = data.blogPost
  return (
    <Layout>
      <Image fluid={fluid} style={{ maxHeight: "500px" }} />
      <Container maxWidth="md">
        <Typography variant="h2">{title}</Typography>
        <RichText richText={json} />
      </Container>
    </Layout>
  )
}

export default blogTemplate
