import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // const [data, setData] = useState(null)
  const [toggle, setToggle] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const onClick = () => setToggle(prev => !prev)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setData({})
  //   }, 500)
  // }, [])

  return (
    <div className="App">
      <div data-testid='input-value'>{inputValue}</div>
      {toggle && <div data-testid='toggle-element'>toggle</div>}
      {/* {data && <div>data</div>} */}
      <div>Hello world</div>
      <input placeholder='input value' onChange={(e) => setInputValue(e.target.value)} />
      <button data-testid='toggle-button' onClick={onClick}>Click</button>
    </div>
  );
}

export default App;
