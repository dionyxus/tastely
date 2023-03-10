import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import logo from './logo.png';
import "./kitchenheader.css";
// import Logo from "./Logo.svg";

const KitchenHeader = (props) => {
  const navigate = useNavigate();
  const loginUser = JSON.parse(localStorage.getItem('user'))._id;

  const handleViewCustomerSubscribePlanClick = (id) => {
    navigate(`/showcustomersubscribeplans`);
  };

  return (
    <ul className="nav">
    <div className='header-logo'>
      <img src={logo} alt="Logo" />
      </div>
      <NavLink to="/owner">Kitchen Dashboard  </NavLink>
      <NavLink to="/createplan">Create Your Plan  </NavLink>
      <NavLink to="/showplan">Show my plans  </NavLink>
      <NavLink to="/myprofile">View my profile</NavLink>

      <NavLink to="/showcustomersubscribeplans"
        
        onClick={(props) => handleViewCustomerSubscribePlanClick(loginUser)}
      >
        View My Customers
      </NavLink>

      
    </ul>
  );
};

export default KitchenHeader;
