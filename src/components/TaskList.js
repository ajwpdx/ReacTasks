import React from 'react'
import Task from './Task'

const TaskList = (props) => {
    return (
        <section className='task-list'>
            <ul>
            {props.tasks.map( (t) => {
                return <Task key = {t.id} task = {t} toggleCompleted={props.toggleCompleted}/>
            })}
            </ul>
        </section>
    )
}

export default TaskList