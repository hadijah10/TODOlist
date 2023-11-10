import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

function BackArrow({ handleBackward }) {
  return (
    <div>
      <IconButton onClick={handleBackward}>
        <ArrowBackIosNewOutlinedIcon />
      </IconButton>
    </div>
  );
}

export default BackArrow;
