import React from "react"
import AboutTabNavigation from "./AboutTabNavigation"
import Section from "../Layout/Section"

const About = () => {
  return (
    <Section title={["About"]}>
      <AboutTabNavigation />
    </Section>
  )
}

export default About
