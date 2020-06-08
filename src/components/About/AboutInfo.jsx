import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Grid } from "@material-ui/core"
import { MDXRenderer } from "gatsby-plugin-mdx"
import CardTitle from "../Title/CardTitle"
import SocialLinks from "../SocialLinks/SocialLinks"

const query = graphql`
  query getData {
    mdx(frontmatter: { title: { eq: "About Info" } }) {
      body
    }
    file(relativePath: { eq: "me.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const AboutInfo = () => {
  const data = useStaticQuery(query)

  // Extract Image
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = data

  // Extract MDX Data
  const {
    mdx: { body },
  } = data

  return (
    <Grid container spacing={3}>
      <Grid item sm={12} md={6}>
        <CardTitle text="I'm a Frontend Developer" />
        <MDXRenderer>{body}</MDXRenderer>
      </Grid>
      <Grid item sm={12} md={6}>
        <Image fluid={fluid} style={{ width: "60%", margin: "0 auto" }} />
        <SocialLinks />
      </Grid>
    </Grid>
  )
}

export default AboutInfo
