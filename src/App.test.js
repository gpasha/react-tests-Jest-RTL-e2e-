import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Test App', () => {
  // // Static elements
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/hello world/i)
    const inputElement = screen.getByPlaceholderText(/input value/i)
    const buttonElement = screen.getByRole('button')
    expect(linkElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    // expect(inputElement).toMatchSnapshot();
    // screen.debug()
  });

  //Dynamic elements
  // test('Get dynamic element', async () => {
  //   render(<App />);
  //   const dataElement = await screen.findByText(/data/i)
  //   expect(dataElement).toBeInTheDocument()
  // });

  test('On click handler', () => {
    render(<App />);
    const buttonElement = screen.getByTestId('toggle-button')
    const toggleElement = screen.queryByTestId('toggle-element')

    expect(buttonElement).toBeInTheDocument()
    expect(toggleElement).toBeNull()

    fireEvent.click(buttonElement)
    expect(screen.getByTestId('toggle-element')).toBeInTheDocument()

    fireEvent.click(buttonElement)
    expect(screen.queryByTestId('toggle-element')).toBeNull()
  });

  test('On change input handler', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/input value/i)
    const inputValueElement = screen.getByTestId('input-value')

    expect(inputValueElement).toContainHTML('')

    fireEvent.input(inputElement, {
      target: { value: '12345' }
    })

    expect(screen.getByTestId('input-value')).toContainHTML('12345')
  });
})
