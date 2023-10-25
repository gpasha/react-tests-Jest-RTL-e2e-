import { fireEvent, render, screen } from "@testing-library/react"
import App2 from "./App2"
import { MemoryRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { createReduxStore } from "./store/store"

describe('ROUTER', () => {
    test('Check links', () => {
        render(
            <Provider store={createReduxStore()}>
                <MemoryRouter initialEntries={['/']}>
                    <App2 />
                </MemoryRouter>
            </Provider>
        )
        const mainLink = screen.getByTestId('main-link')
        const aboutLink = screen.getByTestId('about-link')

        fireEvent.click(aboutLink)
        expect(screen.getByTestId('about-page')).toBeInTheDocument()

        fireEvent.click(mainLink)
        expect(screen.getByTestId('main-page')).toBeInTheDocument()
    })

    test('Check Error page', () => {
        render(
            <MemoryRouter initialEntries={['/afdasdfasd']}>
                <App2 />
            </MemoryRouter>
        )

        expect(screen.getByTestId('not-found-page')).toBeInTheDocument()
    })
})