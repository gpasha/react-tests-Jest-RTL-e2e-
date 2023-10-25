import React from 'react'
import { useState } from 'react'

export default function Hello() {
    const [value, setValue] = useState()
    const [toggle, setToggle] = useState(false)
    // const [value, setValue] = useState()
    const changeHandler = (val) => setValue(val)
    const clickHandler = () => {
        if (value === 'hello') setToggle(prev => !prev)
    }

    return (
        <div>
            {toggle && <h1 id='title-hello'>hello world</h1>}
            <input type='text' id='input-hello' onChange={e => changeHandler(e.target.value)} />
            <button id='btn-hello' onClick={clickHandler}>hello button</button>
        </div>
    )
}
