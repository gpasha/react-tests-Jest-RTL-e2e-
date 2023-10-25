import { fireEvent, screen } from "@testing-library/react"
import Counter from "./Counter"
import { renderWithProvider } from "../../tests/helpers/renderWithprovider"

describe('Counter', () => {
    test('check increment', () => {
        /*const { getByTestId } = */
        // render(<Provider store={createReduxStore()}>
        //     <Counter />
        // </Provider>)
        renderWithProvider(<Counter />)
        const incrementBtn = screen.getByTestId('increment-btn')
        expect(screen.getByTestId('counter-value')).toHaveTextContent('0')
        fireEvent.click(incrementBtn)
        expect(screen.getByTestId('counter-value')).toHaveTextContent('1')
    })
})