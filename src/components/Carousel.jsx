import { Box, styled, Stack, Typography } from "@mui/material";
import BackArrow from "../utils/BackArrow";
import ForwardArrow from "../utils/ForwardArrow";
import { Calendar } from "./Carouselcalendar";
import { useState } from "react";

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "3em",
  color: "#bdbdbd",
  mt: 3,
  mb: 3,
  height: 130,
});
function Carousel() {
  const [calendarIndex, setCalendarIndex] = useState(0);

  const handleForwardArrow = () => {
    if (calendarIndex < Calendar.length - 1) {
      setCalendarIndex((prev) => prev + 1);
    }
  };
  const handleBackwardArrow = () => {
    if (calendarIndex > 0) {
      setCalendarIndex((calendarIndex) => calendarIndex - 1);
    }
  };

  return (
    <div>
      <UserBox>
        <BackArrow handleBackward={handleBackwardArrow} />
        <Stack
          direction="column"
          textAlign="center"
          justifyContent="center"
          spacing={0.2}
        >
          <Typography variant="h4" component="h3" sx={{ color: "#fff" }}>
            {Calendar[calendarIndex]?.day}
          </Typography>
          <Typography variant="h6" component="h6">
            {Calendar[calendarIndex]?.date}
          </Typography>
        </Stack>
        <ForwardArrow handleFoward={handleForwardArrow} />
      </UserBox>
    </div>
  );
}

export default Carousel;
