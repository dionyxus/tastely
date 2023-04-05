import React from 'react';
import { NavLink, Link } from 'react-router-dom';
// import logo from './logo.png';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaHome, FaUser } from 'react-icons/fa';
import logo from './logo.png';
// import "./header.css"

const Header = (props) => {
  const navigate = useNavigate();

  const [loginUser, setLoginUser] = useState({});
  const [kitchenOwner, setKitchenOwner] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setLoginUser(user);
    }
  }, []);
  // const { id } = useParams();

  const loginUserId = JSON.parse(localStorage.getItem('user'))._id;

  const handleViewSubscribePlanClick = (id) => {
    navigate(`/showsubscribeplans/${id}`);
  };

  function handleLogout() {
    // setUser(null);
    localStorage.removeItem('user');
    window.location.href = '/login';
  }

  return (
    <div>
      <div className="user-header">

      <div className="header-logo">
      <a href="/home"><img src={logo} alt="Logo" style={{ objectFit: 'contain', transform: 'scale(1.8x)' }} /></a>
      </div>

       
        <NavLink to="/myprofile">
          {' '}
          <FaUser style={{ fill: '#000' }} size={21} className="icon"/>
        </NavLink>

        <h2>{'Welcome ' + loginUser.name + ''}</h2>
        <button
          className="my-button"
          onClick={(props) => handleViewSubscribePlanClick(loginUserId)}
        >
          Subscribed Plans
        </button>
        <button   onClick={handleLogout} className="my-button">
          Logout
        </button>
      </div>
    </div>  
  );
};

export default Header;
