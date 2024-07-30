import React, { useRef } from 'react'

const TodoInput = ({addTask}) => {
    const taskName = useRef();
    const Addhandler = ()=>{
        addTask(taskName.current.value);
    }
  return (
    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
        <input ref={taskName} placeholder='Enter task'/>
        <button onClick={Addhandler}>Add</button>
    </div>
  )
}

export default TodoInput