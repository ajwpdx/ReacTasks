import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Title from './components/Title'
import Header from './components/Header'
import CompletedCount from './components/CompletedCount';
import {getUniqueId} from './hooks/getUniqueId'

function App() {
  const [tasks, setTasks] = useState([])

  const addNewTask = (taskInput) => {

 const newTask = {
            task: taskInput,
            id: getUniqueId(tasks),
            completed: false
        }

    setTasks([...tasks, newTask])
    
  }

  useEffect(() => {
    if(localStorage.getItem('tasks') !== null){
      setTasks(JSON.parse(localStorage.getItem('tasks')))
        }
  },[])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])


  const toggleCompleted = (clickedTask) => {
    console.log('toggled here')
    setTasks(
      tasks.map((item) => {
        if(item.id === clickedTask.id){
          return {
            ...item, 
            completed: !item.completed
          }
        } else {
          console.log(item.id)
          console.log(clickedTask.id)
          return item
        }
      })
    )

  }

  return (
    <div className='app'>
             <Header/>
      <div className='task-container'>
        <Title/>
      <TaskForm  addNewTask={addNewTask}/>
      <CompletedCount tasks={tasks} setTasks={setTasks}/>
      <TaskList tasks={tasks} toggleCompleted={toggleCompleted}/>
      </div>
    </div>
  );
}

export default App;
