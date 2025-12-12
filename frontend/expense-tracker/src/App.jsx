import React from 'react';
import { 
  BrowserRouter  as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Login from './pages/auth/Login.jsx';
import SignUp from './pages/auth/SignUp.jsx';
import Home from './pages/Dashboard/Home.jsx';
import Expense from './pages/Dashboard/Expense.jsx';
import Income from './pages/Dashboard/Income.jsx';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={<Home />} />
          <Route path='/expense' element={<Expense />} />
          <Route path='/dashboard' element={<Root />} />  
          <Route path='/income' element={<Income />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;

const Root = () => {
  //Check if token exists in localStorage
  const isAuthenticated = !!localStorage.getItem('token');

  //Redirect to dashboard if authenticated,otherwise to login
  return isAuthenticated ? (
  <Navigate to="/dashboard" /> 
  ) : 
    (
    <Navigate to="/login" />  
  );
};
