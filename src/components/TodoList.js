import React from 'react'

const TodoList = ({taskList,dp,ip,del}) => {
  return (
    <div>
        {taskList.map((t,idx)=>{
            return (
                <div key={idx} style={{display:"flex", justifyContent:"space-between" ,margin:"50px 50px" ,padding:"15px 10px"}}>
                    <span >{t}</span>
                    <div>
                        <span><button onClick={()=>ip(t)}>⬆️</button></span> 
                        <span><button onClick={()=>dp(t)}>⬇️</button></span>
                        <span><button onClick={()=>del(t)}>❌</button></span>
                    </div>
                    
                </div>
                
            )
        })}
    </div>
  )
}

export default TodoList