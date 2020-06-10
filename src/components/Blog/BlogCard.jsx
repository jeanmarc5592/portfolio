import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { Typography, Button, useTheme, Grid } from "@material-ui/core"
import CardTitle from "../Title/CardTitle"
import CustomDivider from "../CustomDivider/CustomDivider"

const BlogCard = ({ title, fluid, excerpt, date, author, slug }) => {
  const theme = useTheme()

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "7.5rem",
      }}
    >
      <Image
        fluid={fluid}
        style={{ maxHeight: "200px", marginBottom: "1rem" }}
      />

      <CardTitle text={title} style={{ marginBottom: "auto" }} />
      <Typography
        variant="body1"
        component="p"
        align="left"
        style={{ marginTop: "auto" }}
      >
        {excerpt.substring(0, 120)}...
      </Typography>
      <CustomDivider />
      <Button
        style={{
          color: theme.palette.secondary.main,
          fontWeight: 700,
          marginRight: "2rem",
          textAlign: "left",
          width: "fit-content",
          padding: 0,
        }}
      >
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to={`/blog/${slug}`}
        >
          Read More
        </Link>
      </Button>
    </Grid>
  )
}

export default BlogCard

/**
 * <Grid
      item
      xs={12}
      sm={6}
      md={4}
      style={{
        padding: "3rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Image fluid={fluid} />
      <CardTitle text={title} style={{ marginBottom: "auto" }} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: "1 0 auto",
          alignItems: "flex-start",
        }}
      >
        <Typography
          variant="body2"
          component="small"
          style={{ marginTop: "auto" }}
        >
          {date}
        </Typography>
        <Typography variant="body2" component="small">
          By: {author}
        </Typography>
        <Typography variant="body1" component="p" align="left">
          {slicedExcerpt(excerpt)}
        </Typography>
        <Button
          variant="contained"
          style={{
            color: theme.palette.primary.main,
            background: theme.palette.secondary.main,
            fontWeight: 700,
            marginRight: "2rem",
          }}
        >
          Read More
        </Button>
      </div>
    </Grid>
 */
