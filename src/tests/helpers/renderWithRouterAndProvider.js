import { MemoryRouter } from 'react-router-dom'
import AppRouter from '../../router/AppRouter'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../../store/store'

export const renderWithRouterAndProvider = (component, initialRoute = '/', initialState = {}) => (
    render(
        <Provider store={createReduxStore(initialState)}>
            <MemoryRouter initialEntries={[initialRoute]}>
                <AppRouter />
                {component}
            </MemoryRouter>
        </Provider>
    )
)