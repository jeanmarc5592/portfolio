import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  Drawer,
  AppBar,
  CssBaseline,
  Toolbar,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@material-ui/core"
import { MdMenu, MdClose } from "react-icons/md"
import NavMenu from "../NavMenu/NavMenu"
import logo from "../../../static/Logo-1.png"
import logoWhite from "../../../static/Logo-2.png"

const drawerWidth = "75%"
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolBar: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "1280px",
    [theme.breakpoints.up("lg")]: {
      minWidth: "1280px",
      margin: "0 auto",
    },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: theme.palette.primary.main,
  },
  drawerContainer: {
    overflow: "auto",
    padding: 32,
    height: "100%",
  },
  NavIcon: {
    color: theme.palette.common.white,
    fontSize: "1.5rem",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

const Navbar = () => {
  const classes = useStyles()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const downXS = useMediaQuery(theme.breakpoints.down("xs"))

  const handleOpenDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <div style={{ flexGrow: 1 }}>
            {downXS ? (
              <IconButton onClick={handleOpenDrawer}>
                <MdMenu className={classes.NavIcon} />
              </IconButton>
            ) : (
              <NavMenu />
            )}
          </div>
          <img src={logo} alt="Logo" />
        </Toolbar>
      </AppBar>
      {downXS && (
        <Drawer
          className={classes.drawer}
          variant="temporary"
          open={drawerOpen}
          onClose={handleOpenDrawer}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerContainer}>
            <IconButton
              onClick={handleOpenDrawer}
              style={{ marginBottom: "3rem" }}
            >
              <MdClose className={classes.NavIcon} />
            </IconButton>
            <NavMenu />
          </div>
        </Drawer>
      )}
    </div>
  )
}

export default Navbar
