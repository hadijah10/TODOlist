import React, { useState } from 'react'

import { Box,Stack,InputBase,styled ,Checkbox } from '@mui/material';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';

function Task() {
    const [isPined,setPin] = useState(false)
    const [checked,setChecked] = useState(true)
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [tasks,setTask] = useState([
        {"id":1,
            "data":"Getting an invite for a dribble",
        "Pinned":false,
        "memo":null,},
        {"id":2,
        "data":"Getting an invite for a dribble",
    "Pinned":false,
    "memo":null,},
    {"id":3,
            "data":"Getting an invite for a dribble",
        "Pinned":false,
        "memo":null,}
    ])
    const Addlist = styled("div")(({})=> ({
        display:"flex",justifyContent:"start",alignItems:"center",gap:"10px",
        width :"95%",
        backgroundColor:"#212121",
        color:"#bdbdbd",
       border:"1px solid black",
     
    }))

  return (
  <>
  <Stack spaccing={3} sx={{alignItems:"center",minHeight:"60vh",ml:{sm:1,md:3},mr:{sm:3,md:6},p:0,border:"1px solid pink"}}>
    <Box sx={{display:"flex",justifyContent:'end',alignContent:"center",border:"1px solid white",minWidth:"100%"}}>
    <Addlist sx={{pl:1.5,border:"1px solid pink",borderRadius:1}}>
        <FormatAlignLeftIcon color="#757575" sx={{fontSize:"medium",}}/>
        <InputBase sx={{ color:"#757575"}}placeholder='Add a task'/>
    </Addlist>
    </Box>
    <Stack spacing={2} direction="row" sx={{border:"1px solid red",width:"100%",minHeight:"60vh"}}>
    {tasks && tasks.map((task)=> {
        <Box spacing={2} key={task.id}>,
            <Checkbox checked={checked}onChange={(e)=> {setChecked(e.target.checked)}} />
        </Box>
    })}
    </Stack>
  </Stack>
  </>
  )
}

export default Task