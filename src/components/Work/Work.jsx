import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Section from "../Layout/Section"
import ProjectCard from "./ProjectCard"
import UnderlinedButton from "../Button/UnderlinedButton"

const query = graphql`
  query getAllProjects {
    allContentfulProject {
      allProjects: nodes {
        title
        id
        description {
          description
        }
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        previewLink
        sourceLink
        stack {
          stack
        }
      }
    }
  }
`

const Work = () => {
  const [showAll, setShowAll] = useState(false)
  const {
    allContentfulProject: { allProjects },
  } = useStaticQuery(query)
  const firstTwoProjects = allProjects.slice(0, 2)
  const remainingProjects = allProjects.slice(2)

  return (
    <Section title={["Work"]}>
      {firstTwoProjects.map((project, index) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description.description}
          stack={project.stack.stack}
          previewLink={project.previewLink}
          sourceLink={project.sourceLink}
          fluid={project.image.fluid}
          odd={index % 2 !== 0}
        />
      ))}
      {showAll &&
        remainingProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description.description}
            stack={project.stack.stack}
            previewLink={project.previewLink}
            sourceLink={project.sourceLink}
            fluid={project.image.fluid}
            odd={index % 2 !== 0}
          />
        ))}
      <UnderlinedButton onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show Less" : "Show More"}
      </UnderlinedButton>
    </Section>
  )
}

export default Work
