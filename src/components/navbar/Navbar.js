import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <Link to='/' data-testid='main-link'>Main</Link> &nbsp;/&nbsp;
            <Link to='/about' data-testid='about-link'>About</Link> &nbsp;/&nbsp;
            <Link to='/users' data-testid='users-link'>Users</Link>
        </div>
    )
}
