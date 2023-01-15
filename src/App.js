import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';

//style
import './App.css'

//pages and component
import Create from './pages/create/Create';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Project from './pages/project/Project';
import Signup from './pages/signup/Signup';
import Navbar from './componenets/Navbar';
import Sidebar from './componenets/Sidebar';
import OnlineUser from './componenets/OnlineUser';


function App() {
  const { user, authIsReady } = useAuthContext()
  return (
    <div className="App">
      {authIsReady && ( 
        <BrowserRouter>
        
        {user && <Sidebar/>}
        <div className = "container">
          <Navbar/>
          <Routes>
            <Route exact path='/' element={
            user ? (<Dashboard/>) : (<Navigate to= '/login' />)
            } />

            <Route path='/create' element={
            user ? (<Create/>) : (<Navigate to='/login' />)
            } />

            <Route path='/project/:id' element={
            user ? (<Project/>) : (<Navigate to='/login' />)
            } />
            
            <Route path='/login' element={
            user ? (<Navigate to='/' />) : (<Login/>) 
            } />
            
            <Route path='/signup' element={
            user ? (<Navigate to='/login' />) : (<Signup/>)
            } />
          </Routes>
        </div>
        {user && <OnlineUser />}
        </BrowserRouter>
      )}

    </div>
  );
}

export default App
