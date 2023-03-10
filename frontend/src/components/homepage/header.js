import React from 'react';
import { NavLink, Link } from 'react-router-dom';
// import logo from './logo.png';
import { useNavigate, useParams } from 'react-router-dom';

// import "./header.css"

const Header = (props) => {
  const navigate = useNavigate();

  // const { id } = useParams();

  const loginUser = JSON.parse(localStorage.getItem('user'))._id;

  const handleViewSubscribePlanClick = (id) => {
    navigate(`/showsubscribeplans/${id}`);
  };

  return (
    <div>
    <div className="user-header">
    <NavLink to="/home">Homepage</NavLink>
          <NavLink to="/myprofile">View my profile</NavLink>
          <button className="my-button" onClick={(props) => handleViewSubscribePlanClick(loginUser)}>
        View my subscribed plans
      </button>
    {/* <h2>{'Welcome ' + props.loginUser.name + ''}</h2> */}
    <button className="button">
      <Link to="/Login">Logout</Link>
    </button>
    
      
  </div>
    </div>
  );
};

export default Header;
