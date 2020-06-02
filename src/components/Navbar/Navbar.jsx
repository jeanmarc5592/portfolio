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

const drawerWidth = "80%"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

export default function ClippedDrawer() {
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
        <div style={{ minWidth: "1280px", margin: "0 auto" }}>
          <Toolbar>
            {downXS ? (
              <IconButton onClick={handleOpenDrawer}>
                <MdMenu />
              </IconButton>
            ) : (
              <p>Menu</p>
            )}
          </Toolbar>
        </div>
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
            <IconButton onClick={handleOpenDrawer}>
              <MdClose />
              <p>Menu</p>
            </IconButton>
          </div>
        </Drawer>
      )}
    </div>
  )
}
