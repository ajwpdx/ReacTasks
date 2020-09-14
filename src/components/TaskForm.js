import React, { useState } from 'react'
import {getUniqueId} from '../hooks/getUniqueId'

const TaskForm = (props) => {

    const [taskInput, setTaskInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // const newTask = {
        //     task: taskInput,
        //     id: getUniqueId(),
        //     completed: false
        // }
        
        props.addNewTask(taskInput)
        setTaskInput('')
    }

    return (
        <section className='task-form'>
            <form onSubmit={handleSubmit} autoComplete='off'>
                <label>
                    <input
                    name='task'
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)} 
                    placeholder='Add a task'
                    required
                    />
                </label>
                <button>Add</button>
            </form>
        </section>
    )
}

export default TaskForm