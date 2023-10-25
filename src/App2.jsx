import './App.css';
import { Link } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import Navbar from './components/navbar/Navbar';

function App2() {
  return (
    <div>
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App2;
