import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 700,
    textAlign: "left",
    marginBottom: "2rem",
    "&::after": {
      content: "' '",
      display: "block",
      width: "10%",
      height: "2px",
      background: theme.palette.secondary.main,
    },
  },
}))

const CardTitle = ({ text }) => {
  const classes = useStyles()

  return (
    <Typography variant="h5" className={classes.title}>
      {text}
    </Typography>
  )
}

export default CardTitle
