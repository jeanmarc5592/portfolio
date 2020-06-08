import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Grid } from "@material-ui/core"
import Section from "../Layout/Section"
import BlogCard from "./BlogCard"
import UnderlinedButton from "../Button/UnderlinedButton"

const query = graphql`
  query getAllBlogPosts {
    BlogPosts: allContentfulBlogPost(sort: { fields: date, order: DESC }) {
      allBlogPosts: nodes {
        author
        date(formatString: "MMMM Do, YYYY")
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        slug
        title
        excerpt
        id
      }
    }
  }
`

const Blog = () => {
  const [showAll, setShowAll] = useState(false)
  const {
    BlogPosts: { allBlogPosts },
  } = useStaticQuery(query)
  const firstThreePosts = allBlogPosts.slice(0, 3)
  const remainingPosts = allBlogPosts.slice(3)

  return (
    <Section title={["Blog"]}>
      <Grid container spacing={10} alignItems="stretch">
        {firstThreePosts.map(post => (
          <BlogCard
            key={post.id}
            title={post.title}
            fluid={post.image.fluid}
            excerpt={post.excerpt}
            date={post.date}
            author={post.author}
            slug={post.slug}
          />
        ))}
        {showAll &&
          remainingPosts.map(post => (
            <BlogCard
              key={post.id}
              title={post.title}
              fluid={post.image.fluid}
              excerpt={post.excerpt}
              date={post.date}
              author={post.author}
              slug={post.slug}
            />
          ))}
      </Grid>
      <UnderlinedButton onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show Less" : "Show All"}
      </UnderlinedButton>
    </Section>
  )
}

export default Blog
