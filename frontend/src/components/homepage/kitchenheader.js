import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import logo from './logo.png';
import './kitchenheader.css';
// import Logo from "./Logo.svg";

const KitchenHeader = (props) => {
  const navigate = useNavigate();
  const loginUser = JSON.parse(localStorage.getItem('user'))._id;

  const handleViewCustomerSubscribePlanClick = (id) => {
    navigate(`/showcustomersubscribeplans`);
  };

  return (
    <ul className="nav">
      <div className="header-logo">
        <img src={logo} alt="Logo" style={{ objectFit: 'contain', transform: 'scale(1.8x)' }} />
      </div>
      <NavLink to="/owner">Dashboard</NavLink>
      <NavLink to="/createplan">Create Plans</NavLink>
      <NavLink to="/adddishes">Add Dishes</NavLink>
      <NavLink to="/showplan">View Plans</NavLink>
      

      <NavLink
        to="/showcustomersubscribeplans"
        onClick={(props) => handleViewCustomerSubscribePlanClick(loginUser)}
      >
        View Customers
      </NavLink>
      <NavLink to="/viewmealpage">View Meals</NavLink>
      <NavLink to="/myprofile">View Profile</NavLink>
    </ul>
  );
};

export default KitchenHeader;
