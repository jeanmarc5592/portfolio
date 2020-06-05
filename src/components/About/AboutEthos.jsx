import React, { Fragment } from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql, useStaticQuery } from "gatsby"
import { Grid } from "@material-ui/core"
import CardTitle from "../Title/CardTitle.jsx"

const query = graphql`
  query getEthosData {
    mdx(frontmatter: { title: { eq: "About Ethos" } }) {
      body
    }
  }
`

const AboutEthos = () => {
  const {
    mdx: { body },
  } = useStaticQuery(query)

  return (
    <Fragment>
      <CardTitle text="My Ethos" />
      <Grid container spacing={3}>
        <MDXRenderer>{body}</MDXRenderer>
      </Grid>
    </Fragment>
  )
}

export default AboutEthos
