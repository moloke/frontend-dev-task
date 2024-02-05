import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Results from './components/Results';
import Designs from './components/Designs';
import Setup from './components/Setup';
import Users from './components/Users';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='results' element={<Results />} />
        <Route path='designs' element={<Designs />} />
        <Route path='setup' element={<Setup />} />
        <Route path='manage-users' element={<Users />} />
      </Route>
    </Routes>
    
    </> 
  );
}

export default App;
