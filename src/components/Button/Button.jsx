import React from "react"
import { Button, useTheme } from "@material-ui/core"

const FilledButton = ({ text, filled }) => {
  const theme = useTheme()

  return filled ? (
    <Button
      variant="contained"
      color="secondary"
      style={{
        fontSize: "1.2rem",
        fontWeight: 700,
        padding: "0.5rem",
        color: theme.palette.primary.main,
      }}
    >
      {text}
    </Button>
  ) : (
    <Button
      variant="outlined"
      color="secondary"
      style={{
        fontSize: "1.2rem",
        fontWeight: 700,
        padding: "0.5rem",
      }}
    >
      {text}
    </Button>
  )
}

export default FilledButton
