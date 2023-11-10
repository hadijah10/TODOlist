import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function ForwardArrow({ handleFoward }) {
  return (
    <div>
      <IconButton onClick={handleFoward}>
        <ArrowForwardIosIcon />
      </IconButton>
    </div>
  );
}

export default ForwardArrow;
