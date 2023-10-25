import React from 'react'

export default function User({ user, deleteHandler }) {
    return <div>
        {user.name}
        <button
            id='user-delete'
            onClick={() => deleteHandler(user.id)}
        >
            delete
        </button>
    </div>
}
