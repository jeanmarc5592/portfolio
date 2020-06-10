import React, { Fragment } from "react"
import { Divider, useTheme } from "@material-ui/core"

const CustomDivider = () => {
  const theme = useTheme()
  return (
    <Fragment>
      <Divider
        style={{
          background: theme.palette.common.white,
          opacity: "0.5",
          margin: "1rem 0",
        }}
      />
    </Fragment>
  )
}

export default CustomDivider
