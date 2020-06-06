import React, { Fragment } from "react"
import { Grid, Typography } from "@material-ui/core"
import CardTitle from "../Title/CardTitle"
import ToolCircle from "./ToolCircle"

const majorTools = [
  { title: "html5", percentage: 90 },
  { title: "css3/sass", percentage: 85 },
  { title: "javascript", percentage: 75 },
  { title: "reactjs", percentage: 65 },
]

const minorTools = [
  "graphql",
  "git",
  "yarn/npm",
  "gatsbyjs",
  "jest",
  "enzyme",
  "firebase",
  "material ui",
]

const AboutTools = () => {
  return (
    <Fragment>
      <CardTitle text="Tools I use" />
      <Grid container spacing={2}>
        {majorTools.map((tool, index) => (
          <ToolCircle
            key={index}
            percentage={tool.percentage}
            title={tool.title}
          />
        ))}
      </Grid>
      <Typography
        variant="h6"
        style={{ fontWeight: 700, margin: "3rem 0 2rem 0" }}
      >
        I also love to work with
      </Typography>
      <Grid container spacing={3}>
        {minorTools.map((tool, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={3}
            style={{
              textTransform: "capitalize",
              fontSize: "1rem",
            }}
          >
            {tool}
          </Grid>
        ))}
      </Grid>
    </Fragment>
  )
}

export default AboutTools
