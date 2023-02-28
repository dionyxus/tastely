import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './login.css';
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

  const login =()=> {
    // event.preventDefault();

     axios
      .post(`http://localhost:8080/login`, user)
       
      .then((res) => {
        props.setLoginUser(res.data.user);
        alert(" Congrats "+ res.data.user.name+ " Login Successfull");
        localStorage.setItem('user', JSON.stringify(res.data.user))
        
        // setRedirect(true)
        // props.grabUserData(res.data);
        if (res.data.user.usertype === 'Customer') {
          navigate('/');
        }
        if (res.data.user.usertype === 'Owner') {
          navigate('/owner');
        }
      },[]);
      console.log('login button is clicked');;
  
  };

  const logout = () => {
    localStorage.removeItem("user")
    window.location.reload()
    navigate('/login')
  }

  // if(redirect)
  // return <navigate to = {'/'}/>

  return (
    <div className="Login">
      <h1>Login</h1>
   
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Enter your email"
        onChange={handleChange}
      ></input>
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
      <div>or</div>
      <button className="button" onClick={logout}>
        <Link to="/Register">No Account? Register Here</Link>
      </button>
    </div>
  );
};

export default Login;
