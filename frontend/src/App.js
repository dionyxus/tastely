import logo from './logo.svg';
import { useState, useEffect } from 'react';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import Ownerpage from './components/ownerpage/ownerpage';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = (props) => {

  const [loginUser, setLoginUser] = useState({});
 

 useEffect(() => {
   const user = JSON.parse(localStorage.getItem('user'))
   if (user) {
       setLoginUser(user)
   }
}, [])

  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage loginUser = {loginUser} setLoginUser = {setLoginUser}/>} />
          <Route exact path="/owner" element={<Ownerpage loginUser = {loginUser} setLoginUser = {setLoginUser}/>} />
          <Route exact path="/login" element={<Login loginUser = {loginUser} setLoginUser = {setLoginUser}/>} />
          <Route exact path="/register" element={<Register   />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;

// <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>
