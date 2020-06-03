import React from "react"
import { Link } from "gatsby"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import logoWhite from "../../../static/Logo-2.png"
import * as ROUTES from "../../constants/routes"

const useStyles = makeStyles(theme => ({
  link: {
    color: theme.palette.common.white,
    textDecoration: "none",
    transition: "all 0.3s",
    "&:nth-last-of-type(even)": {
      marginRight: "1rem",
    },
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <footer style={{ textAlign: "center" }}>
      <img src={logoWhite} alt="logo white" style={{ marginBottom: "2rem" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        <Link to={ROUTES.imprint} className={classes.link}>
          <Typography variant="body1">Imprint</Typography>
        </Link>
        <Link to={ROUTES.privacy} className={classes.link}>
          <Typography variant="body1">Privacy</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="body1">
          Copyright &copy; {new Date().getFullYear()}, Jean-Marc Möckel
        </Typography>
      </div>
    </footer>
  )
}

export default Footer
