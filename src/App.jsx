import { useState } from "react";
import {
  AppBar,
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Stack,
  Toolbar,
} from "@mui/material";
import Box from "@mui/material/Box";
import { pink } from "@mui/material/colors";
import Todo from "./components/Todo";
import Task from "./components/Task";

function App() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            minWidth: "48%",
            height: "95vh",
            backgroundColor: "#555E68",
            mt: 2,
          }}
        >
          <Todo />
          <Task />
        </Box>
      </Box>
    </>
  );
}

export default App;
