import { Box,styled,Stack, Typography } from '@mui/material';
import React from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const UserBox = styled(Box)({
    display:'flex',
    alignItems:'center',
    justifyContent: 'center',
    gap:"3em",
    color:'#bdbdbd',
    mt:3,
    mb:3,
    height:130,
   
})
function Carousel() {
  return (
    <div>
        <UserBox>
            <ArrowBackIosNewOutlinedIcon />
            <Stack direction="column" textAlign="center" justifyContent="center" spacing={1}>
                <Typography variant="h4" component="h4" sx={{color:"#fff"}} >Thursday</Typography>
                <Typography variant='h6' component="h6">Mar 23, 2017</Typography>
            </Stack>
            <ArrowForwardIosIcon />
        </UserBox>
    </div>
  )
}

export default Carousel;
 