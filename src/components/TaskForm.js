import React, {useState} from 'react'
import {useForm} from '../hooks/useForm'

const TaskForm = (props) => {
    const [values, handleChange] = useForm({task: ''})
    
    return (
        <section className='task-form'>
            <h1>Make a new task</h1>
            <form>
                <label>
                    <input
                    name='task'
                    value={values.task}
                    onChange={handleChange} 
                    />
                    <button>+</button>
                </label>
            </form>
        </section>
    )
}

export default TaskForm