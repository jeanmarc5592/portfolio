import React from "react"
import { makeStyles } from "@material-ui/styles"
import SectionTitle from "../Title/SectionTitle"
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
      <SectionTitle text={["About"]} />
      <div style={{ padding: "7.5rem 0" }}>
        <AboutTabNavigation />
      </div>
    </section>
  )
}

export default About
