import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png';
import landing from './landing.JPG'
import { FaArrowRight } from 'react-icons/fa';
import "./landingpage.css"


const LandingPage = (props) => {
  const navigate = useNavigate();

//   const loginUser = JSON.parse(localStorage.getItem('user'))._id;

//   const handleViewSubscribePlanClick = (id) => {
//     navigate(`/showsubscribeplans/${id}`);
//   };

  return (
    <div className="landing-components">

    <div className='landing-image'>
    <img src={landing} alt="Landing Page" />
    </div>
   
      <div className="login-signup">

      <div className='landing-logo'>
      <img src={logo} alt="Logo"/>
      </div>

        <ul className="nav">
          <NavLink to="/login">Login <FaArrowRight /></NavLink>
        
          <NavLink to="/register">Sign Up <FaArrowRight /></NavLink>
         
        </ul>
        <p>Designed and Maintained by Meteors</p>
      </div>

    </div>
  );
};

export default LandingPage;


