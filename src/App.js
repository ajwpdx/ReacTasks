import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([])


  const addNewTask = (newTask) => {
    setTasks(...tasks, newTask)
  }

  return (
    <div className="App">
      <TaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
