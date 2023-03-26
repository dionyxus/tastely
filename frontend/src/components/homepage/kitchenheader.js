import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import logo from './logo.png';
import './kitchenheader.css';
import {RxDashboard} from 'react-icons/rx';
import {AiOutlineForm,AiOutlineUsergroupDelete,AiOutlineUser} from 'react-icons/ai';
import {BiDish} from 'react-icons/bi';
import {HiViewBoards} from 'react-icons/hi';



import {AiOutlineFolderAdd} from 'react-icons/ai';
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
      <a href="/owner"><img src={logo} alt="Logo" style={{  objectFit: 'contain', transform: 'scale(1.8x)' }} /></a>
      </div>
      
      <NavLink to="/owner">Dashboard <RxDashboard/></NavLink>
      <NavLink to="/createplan">Create Plans <AiOutlineForm/></NavLink>
      <NavLink to="/adddishes">Add Dishes <AiOutlineFolderAdd/></NavLink>
      
      <NavLink to="/showplan">View Plans <HiViewBoards/></NavLink>
      

      <NavLink
        to="/showcustomersubscribeplans"
        onClick={(props) => handleViewCustomerSubscribePlanClick(loginUser)}
      >
        View Customers <AiOutlineUsergroupDelete/>
      </NavLink>
      <NavLink to="/viewmealpage">View Meals <BiDish/></NavLink>
      <NavLink to="/myprofile">View Profile<AiOutlineUser/></NavLink>
    </ul>
  );
};

export default KitchenHeader;
