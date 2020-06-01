import React from "react"
import { Container, Box } from "@material-ui/core"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <Box component="main">{children}</Box>
      <Footer />
    </Container>
  )
}

export default Layout
