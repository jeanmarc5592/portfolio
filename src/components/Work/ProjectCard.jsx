import React from "react"
import Image from "gatsby-Image"
import { Grid } from "@material-ui/core"
import ProjectCardContent from "./ProjectCardContent"

const ProjectCard = ({
  title,
  fluid,
  description,
  stack,
  previewLink,
  sourceLink,
  odd,
}) => {
  return (
    <Grid container spacing={2} style={{ marginBottom: "7.5rem" }}>
      {!odd && (
        <Grid item sm={12} md={6}>
          <Image fluid={fluid} />
        </Grid>
      )}
      <ProjectCardContent
        title={title}
        description={description}
        stack={stack}
        previewLink={previewLink}
        sourceLink={sourceLink}
      />
      {odd && (
        <Grid item sm={12} md={6}>
          <Image fluid={fluid} />
        </Grid>
      )}
    </Grid>
  )
}

export default ProjectCard
