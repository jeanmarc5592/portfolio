import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import RichText from "@madebyconnor/rich-text-to-jsx"
import { Typography, Container, Divider } from "@material-ui/core"
import Layout from "../components/Layout/Layout"
import CustomDivider from "../components/CustomDivider/CustomDivider"

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
      <Image fluid={fluid} style={{ maxHeight: "500px", marginTop: "4rem" }} />
      <Container maxWidth="md">
        <Typography
          variant="h2"
          align="left"
          color="secondary"
          style={{ fontWeight: 700, marginTop: "2rem" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          component="p"
          align="left"
          style={{
            marginBottom: "2rem",
            marginLeft: "4px",
            letterSpacing: "1px",
            opacity: "0.85",
          }}
        >
          {author} on {date}
        </Typography>
        <CustomDivider />
        <Typography
          variant="body1"
          component="p"
          align="left"
          style={{ marginTop: "3rem", color: "#fff" }}
        >
          <RichText richText={json} />
        </Typography>
      </Container>
    </Layout>
  )
}

export default blogTemplate
