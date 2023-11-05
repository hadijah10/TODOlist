import React, { useEffect, useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PushPinIcon from "@mui/icons-material/PushPin";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Stack,
  Menu,
  MenuItem,
  Button,
  Checkbox,
  Typography,
} from "@mui/material";

function TodoList({ tasks, PinTask }) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handlePin = (index) => {
    PinTask(index);
  };

  useEffect(() => {}, []);
  return (
    <Stack spacing={2} sx={{ pt: 2, width: "100%", minHeight: "60vh" }}>
      {tasks &&
        tasks?.map((task, index) => {
          return (
            <div key={index} style={{ display: "flex" }}>
              <Box
                spacing={2}
                key={task?.id}
                sx={{
                  display: "flex",
                  flex: 1,
                  justifyContent: "space-between",
                  pr: 2,
                  alignItems: "start",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start",
                  }}
                >
                  {task?.Pinned == true && <PushPinIcon />}
                  <Checkbox
                    sx={{
                      pr: { sm: 1, md: 2 },
                      color: "#424242",
                      "&.Mui-checked": { color: "#424242" },
                    }}
                    size="small"
                    {...label}
                  />
                  <Stack spacing={1} sx={{ pt: 1.3, justifyContent: "end" }}>
                    <Typography
                      variant="p"
                      component="p"
                      sx={{ color: "#fff", fontSize: 14 }}
                    >
                      {task?.data}
                    </Typography>
                    <Typography
                      variant="p"
                      component="p"
                      sx={{ color: "#bdbdbd", fontSize: 14 }}
                    >
                      {task?.memo}
                    </Typography>
                  </Stack>
                </Box>
                <Button
                  id="demo-positioned-button"
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <MoreHorizIcon sx={{ color: "#fff" }} />
                </Button>
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <Button
                      onClick={() => handlePin(task.id)}
                      startIcon={<PushPinIcon sx={{ color: "#bdbdbd" }} />}
                      style={{ fontSize: 10, color: "#bdbdbd" }}
                    >
                      Pin On the top
                    </Button>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Button
                      startIcon={<PushPinIcon sx={{ color: "#bdbdbd" }} />}
                      style={{ fontSize: 10, color: "#bdbdbd" }}
                    >
                      Add a memo
                    </Button>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Button
                      startIcon={<DeleteIcon sx={{ color: "#bdbdbd" }} />}
                      style={{ fontSize: 10 }}
                    >
                      Delete
                    </Button>
                  </MenuItem>
                </Menu>
              </Box>
            </div>
          );
        })}
    </Stack>
  );
}

export default TodoList;
