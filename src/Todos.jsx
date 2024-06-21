import React, { useState,useRef} from 'react'
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function Todos() {
    const [todo,setTodo] = useState([])
    const lists = useRef(null)  

  return (
    <>
    <h1 style={{textAlign:'center'}}>Todos App</h1>
    <div style={{display:'flex',justifyContent:"center"}}>
      <Card  style={{marginTop:20}}>
      <TextField  inputRef={lists}  style ={{marginTop:30}} id="outlined-basic" label="Add Todo" variant="outlined" /><br/><br/>
      <Button onClick={()=>{setTodo([...todo,lists.current.value])} } variant="contained">Add TODO</Button>
      </Card>
      
      </div>
      <div style={{marginTop:20}}>
      {todo.map((i)=>{return <Card style={{marginLeft:550,width:500,height:40,alignItems:'center',marginTop:15,display:'flex',justifyContent:'space-between',paddingLeft:50,backgroundColor:'beige'}}>{i}  <Button onClick={()=>{}} variant="outlined">Delete</Button></Card>  })}
      </div>
      
      </>

  )
}

export default Todos