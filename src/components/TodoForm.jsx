import React from 'react'
import {v4} from 'uuid';
import { useForm } from "react-hook-form"

function TodoForm({updateTask}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues:{
      todoitem: "Add a task"
    }
  })
  const listItem = watch('todoitem')
  const onSubmit= ()=>{
   let item = {
      id:v4(),
      data:listItem,
      Pinned:false,
      memo:null
     }
   //setTask([...tasks,item])
   updateTask(item)
  }

  return (
      <form style={{width:"90%",display:"flex",flex:1}} onSubmit={handleSubmit(onSubmit)}>
          <input type="text" 
          {...register("todoitem", { required: 'This is required', maxLength: 20 })}
          autoFocus placeholder='Add a task'  style={{ color:"#757575",width:"inherit",pl:1,border:"none",backgroundColor:"#212121",outline:"none"}} id="theinput"/>
          <p>{errors.todoitem?.message}</p>
          <button style={{display:"none",outline:"none",}}type='submit' >Submit</button>
      </form>
  )
}

export default TodoForm