import React from "react"
import { makeStyles } from "@material-ui/styles"
import Title from "../Title/Title"
import AboutTabNavigation from "./AboutTabNavigation"

const useStyles = makeStyles(theme => ({
  about: {
    padding: "10rem 0 0 0",
  },
}))

const About = () => {
  const classes = useStyles()

  return (
    <section className={classes.about}>
      <Title text={["About"]} />
      <div style={{ padding: "7.5rem 0" }}>
        <AboutTabNavigation />
      </div>
    </section>
  )
}

export default About
