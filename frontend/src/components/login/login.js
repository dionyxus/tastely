import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './login.css';
import landing from './landing.JPG';
import landing2 from './login.png';
import { BACKEND_API } from '../../config';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { RiMailLine } from "react-icons/ri";


const Login = (props) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const textStyle = {
    // fontStyle: 'italic',
    color: 'black',
    fontSize: '40px',
    // textDecoration: 'underline',
    fontWeight: 'bold'
  };

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
      .post(`${BACKEND_API}/login`, user)

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
      <div className="login-form login-form-2">
        <h1 style={textStyle}>Welcome to Tastley</h1>

        <label  className="input-label">Email </label>
       
        <input 
          type="email"
          name="email"
          value={user.email}
          
          placeholder="Enter your email"
          onChange={handleChange}
        ></input>

        {/* <FontAwesomeIcon icon={faEnvelope} size="2x" color="blue"  className="input-icon"/> */}
        
        <label>Password </label>
       
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Enter your password"
          onChange={handleChange}
        ></input>
        {/*<FontAwesomeIcon icon={faLock} size="2x" color="blue"  className="input-icon"/>*/}
        <button className="button" onClick={login}>
          Login
        </button>
        
        <div class="register-link">
          <Link to="/Register"> No Account? Register Here</Link>
        </div>
        <div className="login-icons">
        <div className="login-icon">
        Or Login Using:
      </div>
        <div className="login-icon">
          <FcGoogle />
        </div>
        <div className="login-icon">
          <FaFacebook />
        </div>
        <div className="login-icon">
          <RiMailLine />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Login;
