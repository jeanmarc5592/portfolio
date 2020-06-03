import React from "react"
import { useMediaQuery, useTheme, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Title from "../Title/Title"

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
    padding: "6rem 0",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}))

const Hero = () => {
  const classes = useStyles()
  const theme = useTheme()
  const upMD = useMediaQuery(theme.breakpoints.up("md"))
  const titleText = ["Jean-Marc", "Moeckel"]

  return (
    <section className={classes.hero}>
      <article className={classes.leftSide}>
        <div>
          <Title text={titleText} large />
        </div>
        <Typography variant="h4">
          Merging the passion for coding with great design
        </Typography>
      </article>
      {upMD && (
        <article style={{ background: "green" }}>
          <h2>RIGHT</h2>
        </article>
      )}
    </section>
  )
}

export default Hero
