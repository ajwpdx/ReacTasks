import React from 'react'

const Task = (props) => {
    return (
        <div className='task-item'>
            <li>{props.task}</li>
        </div>
    )
}

export default Task 