import { render, screen } from '@testing-library/react'
import Users from './Users'
import axios from 'axios'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { renderWithRouterAndProvider } from '../../tests/helpers/renderWithRouterAndProvider'

jest.mock('axios')
describe('Users', () => {
    let response = []
    beforeEach(() => {
        response = {
            data: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                }
            ]
        }
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    test('Load users', async () => {
        axios.get.mockReturnValue(response)
        render(<MemoryRouter>
            <Users />
        </MemoryRouter>)
        const users = await screen.findAllByTestId('user-item')
        expect(users.length).toBe(3)
        expect(axios.get).toBeCalledTimes(1)
    })

    test('Redirect to UserDetail page', async () => {
        axios.get.mockReturnValue(response)
        // renderWithRouterAndProvider(<Users />)
        renderWithRouterAndProvider(null, '/users')
        const users = await screen.findAllByTestId('user-item')
        expect(users.length).toBe(3)
        userEvent.click(users[0])
        expect(screen.getByTestId('user-detail-page')).toBeInTheDocument()
    })
})
