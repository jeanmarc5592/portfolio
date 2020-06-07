import React from "react"
import { Button } from "@material-ui/core"

const UnderlinedButton = ({ children, onClick }) => (
  <Button
    style={{
      fontWeight: 700,
      fontSize: "1.3rem",
      textDecoration: "underline",
    }}
    onClick={onClick}
  >
    {children}
  </Button>
)

export default UnderlinedButton
