import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Typography, useTheme, Grid } from "@material-ui/core"
import CardTitle from "../Title/CardTitle"
import SocialLinks from "../SocialLinks/SocialLinks"

const query = graphql`
  query getAboutImg {
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
  const theme = useTheme()
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <Grid container spacing={3}>
      <Grid item sm={12} md={6}>
        <CardTitle text="I'm a Frontend Developer" />
        <Typography
          variant="body1"
          style={{ color: theme.palette.common.white, textAlign: "left" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          cupiditate quisquam animi eius dolore molestias illo inventore dolorum
          itaque odit officia recusandae dolor nulla molestiae ut unde quidem,
          quas atque voluptatibus soluta rem aspernatur sit! Deserunt quisquam
          rerum quis? Adipisci quas suscipit voluptate fugit impedit in dolores
          minima tempora voluptas!
        </Typography>
      </Grid>
      <Grid item sm={12} md={6}>
        <Image fluid={fluid} style={{ width: "60%", margin: "0 auto" }} />
        <SocialLinks />
      </Grid>
    </Grid>
  )
}

export default AboutInfo
