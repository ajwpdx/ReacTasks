import React from 'react'
import Task from './Task'

const TaskList = (props) => {
    return (
        <section className='task-list'>
            {props.tasks.map((t) => {
            return (<Task task = {t} key = {t.id}/>)})}
        </section>
    )
}

export default TaskList