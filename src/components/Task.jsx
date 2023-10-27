import React, { useState,useEffect } from 'react'


import { Box,Stack,styled } from '@mui/material';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';

import TodoForm from './TodoForm';
import TodoList from './TodoList';


function Task() {
  const Addlist = styled("div")(({})=> ({
    display:"flex",alignItems:"center",gap:"10px",
    width :"95%",
    backgroundColor:"#212121",
    color:"#bdbdbd",
    border:"1px solid black",
  
}));
  const [tasks,setTask] = useState(JSON.parse(localStorage.getItem("Tasks")))
  useEffect(()=> {
    !tasks?
      localStorage.setItem("Tasks",JSON.stringify([]))
    :
    localStorage.setItem("Tasks",JSON.stringify(tasks))
  },[tasks])
 const updateTask = (item) => {
  setTask([...tasks,item])
 }
 
  return (
  <>
    <Stack spaccing={3} sx={{alignItems:"center",minHeight:"60vh",ml:{sm:1,md:3},mr:{sm:3,md:6}}}>
      <Box sx={{display:"flex",justifyContent:'end',alignContent:"center",minWidth:"100%"}}>
      <Addlist sx={{pl:1.5,pt:1,pb:1,borderRadius:1}}>
      <FormatAlignLeftIcon color="#757575" sx={{fontSize:"medium",}}/>
      <TodoForm updateTask={updateTask}/>
      </Addlist>
      </Box>
      <TodoList tasks= {tasks} setTask={setTask} />
    </Stack>
  </>
  )
}

export default Task;