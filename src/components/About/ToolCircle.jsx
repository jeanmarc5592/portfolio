import React from "react"
import { Grid, useTheme, Typography } from "@material-ui/core"
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const ToolCircle = ({ percentage, title }) => {
  const theme = useTheme()

  return (
    <Grid item xs={12} sm={6} md={3} style={{ textAlign: "center" }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={{
          root: { width: "50%", fontWeight: 700, marginBottom: "0.5rem" },
          path: { stroke: theme.palette.secondary.main },
          trail: { stroke: `rgba(62, 152, 199, ${percentage / 100})` },
          text: { fill: theme.palette.common.white, fontSize: "1.1rem" },
        }}
        strokeWidth={10}
      />
      <Typography
        variant="h6"
        style={{
          fontWeight: 700,
          letterSpacing: "1px",
          textTransform: "uppercase",
        }}
      >
        {title}
      </Typography>
    </Grid>
  )
}

export default ToolCircle
