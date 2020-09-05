import React from 'react'

const Title = () => {

    return (
        <header className='app-title'>
            <img className='react-logo' src = {process.env.PUBLIC_URL + '/logo192.png' } alt='react logo'/>
            <h1>ReacTasks</h1>

        </header>
    )
}

export default Title