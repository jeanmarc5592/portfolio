import React from "react"
import { useMediaQuery, useTheme } from "@material-ui/core"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Work from "../components/Work/Work"
import Blog from "../components/Blog/Blog"
import Contact from "../components/Contact/Contact"

export default () => {
  const theme = useTheme()
  const upSmall = useMediaQuery("s")
  return (
    <Layout>
      <Hero />
      <About />
      <Work />
      <Blog />
      <Contact />
    </Layout>
  )
}
