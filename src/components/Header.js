import React from 'react'

const Header = () => {
    return (
        <header className='react-header'>
            <div className='logo-container'>
            <img className='header-logo' src = {process.env.PUBLIC_URL + '/logo192.png' } alt='react logo'/>
            <img className='header-logo' src = {process.env.PUBLIC_URL + '/angular-logo.png' } alt='angular logo'/>
            <img className='header-logo' src = {process.env.PUBLIC_URL + '/Vue-logo-1.png' } alt='angular logo'/>
            <img className='header-logo' src = {process.env.PUBLIC_URL + '/vanilla-js.png' } alt='angular logo'/>
            </div>
        </header>
    )
}

export default Header