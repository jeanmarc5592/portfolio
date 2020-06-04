import React, { Fragment } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, useTheme } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  largeTitle: {
    textTransform: "uppercase",
    fontSize: "5rem",
    background: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    fontWeight: "700",
    width: "fit-content",
    padding: "0.5rem 1rem",
    "&:nth-last-of-type(even)": {
      marginBottom: "0.75rem",
    },
  },
  defaultTitle: {
    textTransform: "uppercase",
    background: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    fontWeight: "700",
    margin: "0 auto",
    width: "fit-content",
    padding: "0.5rem 1rem",
    "&:nth-last-of-type(even)": {
      marginBottom: "0.75rem",
    },
  },
}))

const Title = ({ text, large }) => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Fragment>
      {text.map((item, index) => (
        <Typography
          variant={large ? "h1" : "h3"}
          key={index}
          className={large ? classes.largeTitle : classes.defaultTitle}
        >
          {item}
        </Typography>
      ))}
    </Fragment>
  )
}

export default Title
