import React from 'react'

const Task = (props) => {

    const handleClick = (e) => {
        console.log('toggle')
        props.toggleCompleted(props.task)
    }

    return (
            <li onClick={handleClick} className={props.task.completed ? 'task-item completed' : 'task-item'}>{props.task.task}</li>
    )
}

export default Task 