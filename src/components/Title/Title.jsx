import React, { Fragment } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  title: {
    textTransform: "uppercase",
    background: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    fontWeight: "700",
    fontSize: "4rem",
    "&:nth-last-of-type(even)": {
      marginBottom: "0.75rem",
    },
  },
}))

const Title = ({ text, large }) => {
  const classes = useStyles()

  return (
    <Fragment>
      {text.map((item, index) => (
        <Typography variant="h1" key={index} className={classes.title}>
          {item}
        </Typography>
      ))}
    </Fragment>
  )
}

export default Title
