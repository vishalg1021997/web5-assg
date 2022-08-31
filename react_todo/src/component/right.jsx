import React from 'react'
import { useState } from 'react'
import { Add } from './add'

const data = [
    { id: 1, title: "Wake up", status: true },
    { id: 2, title: "drink tea", status: false },
    { id: 3, title: "eat maggi", status: true },
    { id: 4, title: "sleep", status: false }
]

export const Right = () => {

    const [task,setTask] = useState(data)

    const addTask = () =>{
        const getinput = document.getElementById('getinput')
        const newTask = {
            id:data.length + 1,
            title:getinput.value,
            status:false
        }
        setTask([...task,newTask]);
    }
    
    return (
        <div>
            <h1>TODO LIST</h1>
            <input type="text" id="getinput"/>
            <button onClick={addTask}>ADD TASK</button>
            {task.map((el) => (
                // <Add {...el}/>
                <Add key = {el.id} title={el.title} status={el.status}/>
                // (el.status === true ? <h1 style={{color:'green'}}>{el.title}</h1>:<h1 style={{color:'red'}}>{el.title}</h1>)
            ))}
    </div >
  )
}
