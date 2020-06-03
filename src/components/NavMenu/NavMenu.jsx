import React, { Fragment } from "react"
import { MenuList, MenuItem, useMediaQuery, useTheme } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  menuItem: {
    textTransform: "capitalize",
    fontSize: "1.1rem",
    fontWeight: 700,
    letterSpacing: "1px",
    transition: "all 0.3s",
    "&:hover": {
      color: theme.palette.secondary.main,
      transform: "translateY(-3px)",
    },
  },
}))

const LINKS = [
  { title: "home", id: "homePage" },
  { title: "about", id: "aboutPage" },
  { title: "work", id: "workPage" },
  { title: "blog", id: "blogPage" },
  { title: "contact", id: "contactPage" },
]

const NavMenu = () => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))

  return (
    <Fragment>
      <MenuList
        component="ul"
        style={{
          display: "flex",
          flexDirection: `${isMobile ? "column" : "row"}`,
        }}
      >
        {LINKS.map(link => (
          <MenuItem className={classes.menuItem} key={link.id}>
            {link.title}
          </MenuItem>
        ))}
      </MenuList>
    </Fragment>
  )
}

export default NavMenu
