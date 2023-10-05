import React, { useState } from 'react'

import { Box,Stack,InputBase,styled ,Checkbox, Typography } from '@mui/material';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Task() {

    const [checked,setChecked] = useState(false)
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [tasks,setTask] = useState([
        {id:1,
            data:"Getting an invite for a dribble",
        Pinned:false,
        memo:"one of my goals in 2017",},
        {id:2,
        data:"Getting an invite for a dribble",
         Pinned:false,
        memo:null,},
        {id:3,
          data:"Getting an invite for a dribble",
        Pinned:false,
        memo:"its giving",}
    ])
    const Addlist = styled("div")(({})=> ({
        display:"flex",justifyContent:"start",alignItems:"center",gap:"10px",
        width :"95%",
        backgroundColor:"#212121",
        color:"#bdbdbd",
       border:"1px solid black",
     
    }))
    const type1 = {color:"#fff",pt:2}
    const type2 = {color:"#fff"}
  return (
  <>
  <Stack spaccing={3} sx={{alignItems:"center",minHeight:"60vh",ml:{sm:1,md:3},mr:{sm:3,md:6}}}>
    <Box sx={{display:"flex",justifyContent:'end',alignContent:"center",minWidth:"100%"}}>
    <Addlist sx={{pl:1.5,borderRadius:1}}>
        <FormatAlignLeftIcon color="#757575" sx={{fontSize:"medium",}}/>
        <InputBase sx={{ color:"#757575"}}placeholder='Add a task'/>
    </Addlist>
    </Box>
    <Stack spacing={2}  sx={{pt:2,width:"100%",minHeight:"60vh"}}>
    {tasks && tasks.map((task)=> {
        return(
            <Box spacing={2} key={task.id} sx={{display:"flex",justifyContent:"space-between",pr:2,alignItems:"start"}} >
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"start"}}>
            <Checkbox sx={{pr:{sm:1,md:2},color:"#424242"}} size="small" checked={checked}onChange={(e)=> {setChecked(e.target.checked)}} />
            <Stack spacing={1} sx={{pt:1.3,justifyContent:"end"}}>
                <Typography variant='p' component="p" sx={{color:"#fff",fontSize:14}}>{task.data}</Typography>
                <Typography variant='p' component="p" sx={{color:"#424242",fontSize:14}}>{task.memo}</Typography>
            </Stack>
            </Box>
            <MoreHorizIcon sx={{color:"#fff"}}/>
        </Box>
        )
    })}
    </Stack>
  </Stack>
  </>
  )
}

export default Task