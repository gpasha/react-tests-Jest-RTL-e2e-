import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithRouterAndProvider } from '../../tests/helpers/renderWithRouterAndProvider'
import Navbar from './Navbar'
import { MemoryRouter } from 'react-router-dom'
import AppRouter from '../../router/AppRouter'
import { Provider } from 'react-redux'
import { createReduxStore } from '../../store/store'

describe('Navbar', () => {

    test('Check Main link', () => {
        // renderWithRouterAndProvider(<Navbar />)
        // renderWithRouterAndProvider(null)
        render(
            <Provider store={createReduxStore()}>
                <MemoryRouter initialEntries={['/']}>
                    <AppRouter />
                    <Navbar />
                </MemoryRouter>

            </Provider>
        )
        const mainLink = screen.getByTestId('main-link')

        userEvent.click(mainLink)
        expect(screen.getByTestId('main-page')).toBeInTheDocument()
    })

    test('Check About link', async () => {
        renderWithRouterAndProvider(<Navbar />)
        const aboutLink = screen.getByTestId('about-link')

        userEvent.click(aboutLink)
        expect(screen.getByTestId('about-page')).toBeInTheDocument()
    })

    test('Check Users link', () => {
        renderWithRouterAndProvider(<Navbar />)
        const usersLink = screen.getByTestId('users-link')

        userEvent.click(usersLink)
        expect(screen.getByTestId('users-page')).toBeInTheDocument()
    })
})
