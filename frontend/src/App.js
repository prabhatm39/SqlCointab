import logo from './logo.svg';
import './App.css';
import { Home } from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import { UserDetails } from './Pages/UserDetails';

function App() {
  return (
   
    <Routes>
<Route path='/' element={ <Home />} />
<Route path='/user' element={<UserDetails />} />
    </Routes>
  );
}

export default App;
