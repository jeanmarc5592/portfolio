import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import { Tabs, Tab, useTheme } from "@material-ui/core"
import { FaInfo, FaHandHoldingHeart, FaTools } from "react-icons/fa"
import AboutInfo from "./AboutInfo"
import AboutTools from "./AboutTools"
import AboutEthos from "./AboutEthos"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <article style={{ paddingLeft: "3rem" }}>{children}</article>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
    display: "flex",
  },
  tabs: {
    "& .MuiTabs-flexContainerVertical": {
      alignItems: "flex-end",
    },
  },
}))

export default function VerticalTabs() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const theme = useTheme()

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="About Me"
        className={classes.tabs}
      >
        <Tab
          icon={<FaInfo />}
          {...a11yProps(0)}
          style={{
            color: theme.palette.common.white,
            fontSize: "2rem",
            marginBottom: "2rem",
          }}
        />
        <Tab
          label={<FaTools />}
          {...a11yProps(1)}
          style={{
            color: theme.palette.common.white,
            fontSize: "2rem",
            marginBottom: "2rem",
          }}
        />
        <Tab
          label={<FaHandHoldingHeart />}
          {...a11yProps(2)}
          style={{
            color: theme.palette.common.white,
            fontSize: "2rem",
            marginBottom: "2rem",
          }}
        />
      </Tabs>
      <TabPanel
        value={value}
        index={0}
        style={{
          width: "100%",
          textAlign: "left",
          color: theme.palette.common.white,
          fontSize: "1rem",
        }}
      >
        <AboutInfo />
      </TabPanel>
      <TabPanel
        value={value}
        index={1}
        style={{
          width: "100%",
          textAlign: "left",
          color: theme.palette.common.white,
          fontSize: "1rem",
        }}
      >
        <AboutTools />
      </TabPanel>
      <TabPanel
        value={value}
        index={2}
        style={{
          width: "100%",
          textAlign: "left",
          color: theme.palette.common.white,
          fontSize: "1rem",
        }}
      >
        <AboutEthos />
      </TabPanel>
    </div>
  )
}
