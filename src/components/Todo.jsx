import { pink } from "@mui/material/colors";
import { Tab, Tabs, TabPanel, TabList, tabClasses } from "@mui/joy";
import Box from "@mui/material/Box";
import Carousel from "./Carousel";

import React, { useState } from "react";

function Todo() {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <Tabs
        aria-label="Pipeline"
        value={index}
        onChange={(event, value) => setIndex(value)}
      >
        <TabList
          sx={{
            mb: 0,
            pb: 0,

            justifyContent: "center",
            backgroundColor: "#555E68",

            [`&& .${tabClasses.root}`]: {
              flex: "initial",

              color: "#bdbdbd",
              bgcolor: "transparent",
              "&:hover": {
                bgcolor: "transparent",
                borderBottom: "1px solid #212121",
              },
              [`&.${tabClasses.selected}`]: {
                color: "#fff",
                borderBottom: "3px solid #d45790",
                "&::after": {
                  height: 2,
                  bgcolor: "transparent",
                },
              },
            },
          }}
        >
          <Tab indicatorInset sx={{ mr: 2 }}>
            Day{" "}
          </Tab>
          <Tab indicatorInset sx={{ mr: 1 }}>
            Week{" "}
          </Tab>
          <Tab indicatorInset sx={{ mr: 1 }}>
            Month{" "}
          </Tab>
          <Tab indicatorInset sx={{ mr: 1 }}>
            Year{" "}
          </Tab>
        </TabList>
        <Box
          sx={(theme) => ({
            bgcolor: "#555E68",
            clipPath: "inset(0 -100vmax)",
          })}
        >
          <TabPanel value={0}>
            <Carousel />
          </TabPanel>
          <TabPanel value={1}>Library</TabPanel>
          <TabPanel value={2}>Library</TabPanel>
          <TabPanel value={3}>Library</TabPanel>
        </Box>
      </Tabs>
    </div>
  );
}

export default Todo;
