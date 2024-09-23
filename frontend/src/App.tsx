
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import  ListMember from './pages/ListMember';

function App() {
  return (
    
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/ListMember' element={<ListMember />} />
      </Routes>
  );
}

export default App;
