import React from "react"
import { Grid, Typography, Button, useTheme } from "@material-ui/core"
import { FaCode, FaGlobe } from "react-icons/fa"
import CardTitle from "../Title/CardTitle"

const ProjectCardContent = ({
  title,
  description,
  stack,
  previewLink,
  sourceLink,
}) => {
  const theme = useTheme()

  return (
    <Grid item sm={12} md={6} style={{ padding: "0 2rem" }}>
      <CardTitle text={title} />
      <Typography variant="body1" component="p" align="left">
        {description}
      </Typography>
      <ul
        style={{
          display: "flex",
          padding: 0,
          margin: "2rem 0 3rem 0",
        }}
      >
        {stack.map((item, index) => (
          <li
            style={{
              color: theme.palette.secondary.main,
              listStyleType: "none",
              fontStyle: "italic",
              fontWeight: "bolder",
              fontSize: "1rem",
              letterSpacing: "1px",
              marginRight: "1rem",
            }}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Button
          href={previewLink}
          variant="contained"
          style={{
            color: theme.palette.primary.main,
            background: theme.palette.secondary.main,
            fontWeight: 700,
            marginRight: "2rem",
          }}
          startIcon={<FaGlobe />}
        >
          Preview
        </Button>
        <Button
          href={sourceLink}
          variant="outlined"
          style={{
            color: theme.palette.secondary.main,
            borderColor: theme.palette.secondary.main,
            fontWeight: 700,
          }}
          startIcon={<FaCode />}
        >
          Source
        </Button>
      </div>
    </Grid>
  )
}

export default ProjectCardContent
