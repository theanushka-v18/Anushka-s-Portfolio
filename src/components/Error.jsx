import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
    return (
        <div className='error-page'>
            <div className='number'>404</div>
            <div className='pnf'>Page Not Found</div>
            <NavLink to='/'>Home</NavLink>
        </div>
    )
}

export default Error
