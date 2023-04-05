import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import logo from './logo.png';
import './kitchenheader.css';
import {RxDashboard} from 'react-icons/rx';
import {AiOutlineForm,AiOutlineUsergroupDelete,AiOutlineUser} from 'react-icons/ai';
import {BiDish} from 'react-icons/bi';
import {HiViewBoards} from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';




import {AiOutlineFolderAdd} from 'react-icons/ai';
// import Logo from "./Logo.svg";

const KitchenHeader = (props) => {

  const { setIsActive, isActive } = props;
  console.log(props)

  function handleClick() {
    console.log('click');
    console.log(setIsActive, isActive);
    setIsActive(!isActive);
  }

  const navigate = useNavigate();
  const loginUser = JSON.parse(localStorage.getItem('user'))._id;

  const handleViewCustomerSubscribePlanClick = (id) => {
    navigate(`/showcustomersubscribeplans`);
  };

  return (
    <ul className="nav">
    <FaTimes className='cross' onClick={handleClick}/>
      <div className="header-logo">
      
      <a href="/owner"><img src={logo} alt="Logo" style={{  objectFit: 'contain', transform: 'scale(1.8x)' }} /></a>
      </div>
      
      
      <NavLink to="/owner" onClick={handleClick}>Dashboard <RxDashboard/></NavLink>
      <NavLink to="/createplan" onClick={handleClick}>Create Plans <AiOutlineForm/></NavLink>
      <NavLink to="/showplan" onClick={handleClick}>View Plans <HiViewBoards/></NavLink>
      <NavLink to="/adddishes" onClick={handleClick}>Add Dishes <AiOutlineFolderAdd/></NavLink>

      <NavLink
        to="/showcustomersubscribeplans" 
        onClick={(props) => {
          handleViewCustomerSubscribePlanClick(loginUser)
          handleClick()
        }
          
        } 
      >
        View Customers  <AiOutlineUsergroupDelete/>
      </NavLink>
      <NavLink to="/viewmealpage" onClick={handleClick}>View Meals <BiDish/></NavLink>
      <NavLink to="/myprofile" onClick={handleClick}>View Profile<AiOutlineUser/></NavLink>
    </ul>
  );
};

export default KitchenHeader;
