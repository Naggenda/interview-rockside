import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import Questions from '../../Views/Questions';
import Answers from '../../Views/Questions';
import Preview from '../../Views/Preview/preview';


export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="page">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Display" value="1" />
              <Tab label="Data" value="2" />
              <Tab label="Validation" value="3" />
              <Tab label="API" value="4" />
              <Tab label="Conditional" value="5" />
              <Tab label="Logic" value="6" />
              <Tab label="Layout" value="7" />
            </TabList>
          </Box>
          <TabPanel value="1">great</TabPanel>
          <TabPanel value="2">
          <Questions />
          <Answers />
          </TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
          <TabPanel value="4">jod</TabPanel>
          <TabPanel value="5">76</TabPanel>
          <TabPanel value="6">888</TabPanel>
          <TabPanel value="7">jiji</TabPanel>
        </TabContext>
      </Box>
      <div className="preview">
      <p>Preview</p>
      <Preview />
      </div>
    </div>
  );
}
