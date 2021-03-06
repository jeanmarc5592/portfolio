import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { useMediaQuery, useTheme, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { MdExpandMore } from "react-icons/md"
import SectionTitle from "../Title/SectionTitle"
import Button from "../Button/Button"

const useStyles = makeStyles(theme => ({
  hero: {
    display: "grid",
    gridTemplateColumns: "1fr",
    height: "calc(100vh - 64px)",
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
  leftSide: {
    padding: "3rem 1rem",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}))

const query = graphql`
  query getHeroImg {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  const classes = useStyles()
  const theme = useTheme()
  const upMD = useMediaQuery(theme.breakpoints.up("md"))

  return (
    <section className={classes.hero}>
      <article className={classes.leftSide}>
        <div>
          <SectionTitle text={["Jean-Marc", "Möckel"]} large />
        </div>
        <Typography
          variant="h3"
          style={{ textAlign: "left", textTransform: "uppercase" }}
        >
          Merging the passion for coding with design
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button text="My Work" filled />
          <Button text="Contact Me" />
        </div>

        <MdExpandMore
          style={{
            color: theme.palette.common.white,
            fontSize: "3rem",
            margin: "0 auto",
          }}
        />
      </article>
      {upMD && (
        <article style={{ padding: "3rem 0" }}>
          <Image fluid={fluid} style={{ height: "100%" }} />
        </article>
      )}
    </section>
  )
}

export default Hero
