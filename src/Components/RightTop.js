import Education from "./Education"
import Skills from "./Skills"
import Projects from './Projects';
import Thesis from "./Thesis";
import WorkHistory from './WorkHistory';
import Songs from "./Songs";
import Certifications from "./Certifications";
import About from "./About";





import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    
  },
}));

export default function RightTop() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} id = "menu">
      <AppBar position="static" color="default">
        <Tabs className = "grid-container p-0"
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab className= "font-weight-bold" label="About" {...a11yProps(0)} />
          <Tab className= "font-weight-bold" label="Education" {...a11yProps(1)} />
          <Tab className= "font-weight-bold" label="Skills" {...a11yProps(2)} />
          <Tab className= "font-weight-bold" label="Projects" {...a11yProps(3)} />
          <Tab className= "font-weight-bold" label="Thesis" {...a11yProps(4)} />
          <Tab className= "font-weight-bold" label="Certifications" {...a11yProps(5)} />
          <Tab className= "font-weight-bold" label="Songs" {...a11yProps(6)} />
          <Tab className= "font-weight-bold" label="Experience" {...a11yProps(7)} />
          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <About></About>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Education></Education>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Skills></Skills>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Projects></Projects>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Thesis></Thesis>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <Certifications></Certifications>
        
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Songs></Songs>
      </TabPanel>
      <TabPanel value={value} index={7}>
      <WorkHistory></WorkHistory>
      </TabPanel>

    </div>
  );
}

















