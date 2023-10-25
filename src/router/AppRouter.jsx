import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../pages/Main'
import About from '../pages/About'
import Users from '../pages/Users/Users'
import UserDetail from '../pages/UserDetail'
import Error from '../pages/Error'
import Hello from '../pages/Hello/Hello'
import UsersForTest from '../pages/UsersForTest/UsersForTest'

export default function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/hello' element={<Hello />} />
            <Route path='/about' element={<About />} />
            <Route path='/users' element={<Users />} />
            <Route path='/usersfortest' element={<UsersForTest />} />
            <Route path='/users/:id' element={<UserDetail />} />
            <Route path='/*' element={<Error />} />
        </Routes>
    )
}
