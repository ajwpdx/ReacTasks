import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Title from './components/Title'
import Header from './components/Header'
import CompletedCount from './components/CompletedCount';

function App() {
  const [tasks, setTasks] = useState([])

  const addNewTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

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
      <div className='task-container'>
        <Header/>
        <Title/>
      <TaskForm  addNewTask={addNewTask}/>
      <CompletedCount tasks={tasks} setTasks={setTasks}/>
      <TaskList tasks={tasks} toggleCompleted={toggleCompleted}/>
      </div>
    </div>
  );
}

export default App;
