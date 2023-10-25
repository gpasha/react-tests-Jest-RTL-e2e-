import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import User from './User'

export default function UsersForTest() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    const loadUsers = async () => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                setTimeout(() => {
                    setUsers(json)
                    setLoading(false)
                }, 100)
            })
            .catch(e => {
                setLoading(false)
            })
    }

    useEffect(() => {
        loadUsers()
    }, [])

    const deleteHandler = (id) => {
        setUsers(prev => prev.filter(user => user.id !== id))
    }

    return (
        <div data-testid='users-page'>
            {loading && <h1 id='users-loading'>Loading...</h1>}
            {!!users.length && <div id='users-list'>
                {users.map(user => <User key={user.id} user={user} deleteHandler={deleteHandler} />)}
            </div>}
        </div>
    )
}
