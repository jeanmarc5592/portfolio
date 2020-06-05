import React from "react"
import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa"
import * as LINKS from "../../constants/links"

const useStyles = makeStyles(theme => ({
  iconButton: {
    fontSize: "2rem",
    color: theme.palette.grey[500],
    transition: "all 0.3s",
    "&:hover": {
      background: "none",
      color: theme.palette.secondary.main,
    },
  },
}))

const socialLinks = [
  {
    icon: <FaGithub />,
    url: LINKS.github,
  },
  {
    icon: <FaInstagram />,
    url: LINKS.instagram,
  },
  {
    icon: <FaTwitter />,
    url: LINKS.twitter,
  },
]

const SocialLinks = () => {
  const classes = useStyles()

  return (
    <div style={{ marginTop: "2rem", textAlign: "center" }}>
      {socialLinks.map((link, index) => (
        <Button key={index} href={link.url} className={classes.iconButton}>
          {link.icon}
        </Button>
      ))}
    </div>
  )
}

export default SocialLinks
