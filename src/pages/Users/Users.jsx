import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Users() {
    const [users, setUsers] = useState([])

    const loadUsers = async () => {
        const result = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(result.data)
    }

    useEffect(() => {
        loadUsers()
    }, [])

    return (
        <div data-testid='users-page'>
            {users.map(user => <Link
                key={user.id}
                data-testid='user-item'
                to={`/users/${user.id}`}
            >
                <div>{user.name}</div>
            </Link>)}
        </div>
    )
}
