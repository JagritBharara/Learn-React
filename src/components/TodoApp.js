import React, { useState } from 'react'
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoApp = () => {
    let tasks = ["play","rest","code","eat"];
    const [taskList,setTaskList] = useState(tasks);

    const addTask = (t)=>{
      let newtask = [...taskList];
      newtask.push(t);
      setTaskList(newtask);
    }

    const dp = (t)=>{
      let newtaskList = [...taskList];

      const idx = newtaskList.indexOf(t);
      if(idx<newtaskList.length-1){
          const temp  = newtaskList[idx+1];
          newtaskList[idx+1] = newtaskList[idx];
          newtaskList[idx]=temp;

      }
      setTaskList(newtaskList);
    }

    const ip = (t)=>{
      let newtaskList = [...taskList];

      const idx = newtaskList.indexOf(t);
      if(idx>0){
          const temp  = newtaskList[idx-1];
          newtaskList[idx-1] = newtaskList[idx];
          newtaskList[idx]=temp;

      }
      setTaskList(newtaskList);
    }

    const del = (t)=>{
      let newtaskList = taskList.filter(task=> task!==t);
      setTaskList(newtaskList);
    }

    const taskHandler = (event)=>{
      event.preventDefault();
      let task = taskList;
      task.push(event.target.value);
      setTaskList(task);
    }
  return (
    <div>
      <TodoInput addTask={addTask} />
      <TodoList taskList={taskList} dp={dp} ip={ip} del={del} />
    </div>
  )
}

export default TodoApp