import React from "react"
import { Grid } from "@material-ui/core"

const EthosCard = ({ children }) => {
  return (
    <Grid item sm={12} md={6}>
      {children}
    </Grid>
  )
}

export default EthosCard
