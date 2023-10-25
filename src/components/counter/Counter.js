import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../../store/reducers/counterReducer'
import { getCounterValue } from '../../store/reducers/selectors/getCounterValue/getCounterValue'

export default function Counter() {

    const dispatch = useDispatch()
    const value = useSelector(getCounterValue)

    const onIncrement = () => {
        dispatch(increment())
    }
    const onDecrement = () => {
        dispatch(decrement())
    }

    return (
        <div>
            <h1 data-testid='counter-value'>value: {value}</h1>
            <button data-testid='increment-btn' onClick={onIncrement}>Increment</button>
            <button data-testid='decrement-btn' onClick={onDecrement}>Decrement</button>
        </div>
    )
}
