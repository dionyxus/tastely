import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './login.css';
import landing from './landing.JPG';
// import { UserContext } from '../../usercontext';

const Login = (props) => {
  const navigate = useNavigate();

  // const  [redirect, setRedirect] = useState(false);
  // const {setLoginUser} = useContext(UserContext);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    // event.preventDefault();

    axios
      .post(`http://localhost:8080/login`, user)

      .then((res) => {
        props.setLoginUser(res.data.user);
        alert(' Congrats ' + res.data.user.email + ' Login Successfull');
        localStorage.setItem('user', JSON.stringify(res.data.user));

        // setRedirect(true)
        // props.grabUserData(res.data);
        if (res.data.user.usertype === 'Customer') {
          navigate('/home');
        }
        if (res.data.user.usertype === 'Owner') {
          navigate('/owner');
        }
      }, []);
    console.log('login button is clicked');
  };

  const logout = () => {
    localStorage.removeItem('user');
    window.location.reload();
    navigate('/login');
  };

  // if(redirect)
  // return <navigate to = {'/'}/>

  return (
    <div className="Login">
      <div className="login-image">
        <img src={landing} alt="Login Page" />
      </div>
      <div className="login-form">
        <h1>Welcome</h1>
        
          <label>Email </label>
          <input
            type="email"
            name="email"
            value={user.email}
            placeholder="Enter your email"
            onChange={handleChange}
          ></input>
          <label>Password </label>
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="Enter your password"
            onChange={handleChange}
          ></input>
          <button className="button" onClick={login}>
            Login
          </button>
          <div class="register-link">
            <Link to="/Register"> No Account? Register Here</Link>
          </div>
          
        
      </div>
    </div>
  );
};

export default Login;
