import React from "react"
import { Container, Box } from "@material-ui/core"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const theme = createMuiTheme({
  typography: {
    fontFamily: "Montserrat",
    fontSize: 10,
  },
  palette: {
    primary: {
      main: "#002031",
      light: "rgba(2,46,69,.68)",
    },
    secondary: {
      main: "#5DD88D",
    },
    text: {
      primary: "#F0F0F0",
      secondary: "#D2D2D2",
    },
    background: {
      default: "#002031",
    },
  },
})

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg" style={{ marginTop: 64 }}>
        <Box component="main">{children}</Box>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default Layout
