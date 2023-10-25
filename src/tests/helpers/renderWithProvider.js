import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../../store/store'

export const renderWithProvider = (component, initialState) => (
    render(
        <Provider store={createReduxStore(initialState)}>
            {component}
        </Provider>
    )
)