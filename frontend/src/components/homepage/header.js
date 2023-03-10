import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from './logo.png';
import { useNavigate, useParams } from 'react-router-dom';

// import "./header.css"

const Header = (props) => {
  const navigate = useNavigate();

  const { id } = useParams();

  const loginUser = JSON.parse(localStorage.getItem('user'))._id;

  const handleViewSubscribePlanClick = (id) => {
    navigate(`/showsubscribeplans/${id}`);
  };

  return (
    <div>
      <div>
        <ul className="nav">
          
          <NavLink to="/home">Customer Dashboard</NavLink>
          <NavLink to="/myprofile">View my profile</NavLink>

          <button onClick={(props) => handleViewSubscribePlanClick(loginUser)}>
            View my subscribed plans
          </button>

          <NavLink to={`/showsubscribeplans/${id}`}>
            View my subscribed plans
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
