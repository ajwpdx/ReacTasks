import React from 'react'

const CompletedCount = (props) => {

    const totalTaskCount = props.tasks.length
    const completedTasks = props.tasks.filter(item => item.completed === true) 
    const completedTasksCount = completedTasks.length

    const clearCompleted = (e) => {
        props.setTasks(
            props.tasks.filter(item => item.completed === false)
        )
    }

    return (
        <div className='completed-count'>
            <p>Completed ({completedTasksCount} / {totalTaskCount})</p>
            <p className={completedTasksCount > 0 ? "clear-completed" : "hidden"} onClick={clearCompleted}>Clear Completed</p>
        </div>
    )
}

export default CompletedCount