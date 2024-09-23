
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import  ListMember from './pages/ListMember';
import EditMember from './pages/EditMember';
import  CreateMember  from './pages/CreateMember';
function App() {
  return (
    
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/ListMember' element={<ListMember />} />
        <Route path='/EditMember' element={<EditMember />} />
        <Route path='/CreateMember' element={<CreateMember />} />
      </Routes>
  );
}

export default App;
