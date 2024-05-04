import React, { useState } from 'react'
import axios from 'axios';
import './input.css'

const Input = () => {
    const [task,setTask]=useState();
    // const [list,setList]=useState([]);
     function handleClick(){
        axios.post(`${process.env.REACT_APP_API}/addTask`,{
            task:task
        }).then(res=>{
            // window.location.reload();
            console.log(res.data);
        }).catch(err => console.log(err));
      }

  return (
    <div className='inputdiv'>
        <input type='text' value={task} onChange={(e)=>setTask(e.target.value)} className='inputBox' placeholder='Enter task'/>
        <button onClick={handleClick} className='addbutton'>Add to List</button>
    </div>
  )
}

export default Input