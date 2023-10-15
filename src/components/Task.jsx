import React, { useState,useEffect } from 'react'
import {v4} from 'uuid';

import { Box,Stack,InputBase,Menu,MenuItem,Button,Tooltip,styled ,Checkbox, Typography } from '@mui/material';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PushPinIcon from '@mui/icons-material/PushPin';
import DeleteIcon from '@mui/icons-material/Delete';


function Task() {

    const [listItem,setListItem] = useState('')
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [tasks,setTask] = useState(JSON.parse(localStorage.getItem("Tasks")))
    const Addlist = styled("div")(({})=> ({
        display:"flex",alignItems:"center",gap:"10px",
        width :"95%",
        backgroundColor:"#212121",
        color:"#bdbdbd",
       border:"1px solid black",
     
    }));

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const clicke=(e)=> {
        e.preventDefault()
       let logs = JSON.parse(localStorage.getItem('Tasks') || '[]');
       let item = {
        id:v4(),
        data:listItem,
        Pinned:false,
        memo:null
       }
       logs.push(item)
       localStorage.setItem("Tasks",JSON.stringify(logs))
    }
    
    const handlePin=(index)=> {
        if (!tasks) return;
        setTask(tasks.map((data)=> {
            data.id === index ? {...tasks,Pinned:!data.Pinned}:tasks
        })
     
        )
      
    }

    useEffect(()=> {},[clicke])
   

  return (
  <>
  <Stack spaccing={3} sx={{alignItems:"center",minHeight:"60vh",ml:{sm:1,md:3},mr:{sm:3,md:6}}}>
    <Box sx={{display:"flex",justifyContent:'end',alignContent:"center",minWidth:"100%"}}>
    <Addlist sx={{pl:1.5,pt:1,pb:1,borderRadius:1}}>
    <FormatAlignLeftIcon color="#757575" sx={{fontSize:"medium",}}/>
        <form action='' style={{width:"90%",display:"flex",flex:1}} id="theform" method='POST' onSubmit={clicke}>
        <input type="text" value={listItem} autoFocus placeholder='Add a task' onChange={(e)=> setListItem(e.target.value)} style={{ color:"#757575",width:"inherit",pl:1,border:"none",backgroundColor:"#212121"}} id="theinput"/>
        <button style={{display:"none",outline:"none",}}type='submit' >Submit</button>
        </form>
    </Addlist>
    </Box>
    <Stack spacing={2}  sx={{pt:2,width:"100%",minHeight:"60vh"}}>
    {tasks && tasks.map((task,index)=> {
        return(<div key={index} style={{display:'flex'}}>
           
            <Box spacing={2} key={task.id} sx={{display:"flex",flex:1,justifyContent:"space-between",pr:2,alignItems:"start"}} >
           
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"start"}}>
            {(task.Pinned==true)&& (<PushPinIcon/>)}
            <Checkbox sx={{pr:{sm:1,md:2},color:"#424242", '&.Mui-checked': {color: "#424242"},}} size="small" {...label} />
            <Stack spacing={1} sx={{pt:1.3,justifyContent:"end"}}>
                <Typography variant='p' component="p" sx={{color:"#fff",fontSize:14}}>{task.data}</Typography>
                <Typography variant='p' component="p" sx={{color:'#bdbdbd',fontSize:14}}>{task.memo}</Typography>
            </Stack>
            </Box>
           
            <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
            <MoreHorizIcon sx={{color:"#fff"}}/>
            </Button>
            <Menu 
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose} s>
        <Button startIcon={<PushPinIcon sx={{color:"#bdbdbd"}}/>} style={{fontSize:10,color:"#bdbdbd"}} onClick={()=>handlePin(task.id)}>Pin On the top</Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Button  startIcon={<PushPinIcon sx={{color:"#bdbdbd"}}/>} style={{fontSize:10,color:"#bdbdbd"}}>Add a memo</Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Button startIcon={<DeleteIcon sx={{color:"#bdbdbd"}}/>} style={{fontSize:10,}}>Delete</Button>
        </MenuItem>
      </Menu>
           
        </Box>
        </div>)
    })}
    </Stack>
  </Stack>
  </>
  )
}

export default Task;