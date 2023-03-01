import React from "react";
import { NavLink, Link, useNavigate} from "react-router-dom";

// import Logo from "./Logo.svg";

const KitchenHeader = (props) => {

  const navigate = useNavigate();
  const loginUser = JSON.parse(localStorage.getItem('user'))._id;

  const handleViewCustomerSubscribePlanClick = (id) => {
    navigate(`/showcustomersubscribeplans`)
  };

  return (
    <div className="header-background">
      <div className="header header-max-width-div">
     
        <ul className="nav">
       
        <NavLink to="/owner">Kitchen Dashboard -   </NavLink>
            <NavLink to="/createplan">Create Your Plan - </NavLink>
          <NavLink to="/showplan">Show my plans</NavLink><br></br><br></br>

           <button className="my-button" onClick={(props) => handleViewCustomerSubscribePlanClick(loginUser)} >View My Customers</button>

            <button className="button"><Link to="/Login">Logout</Link></button><br></br>
            
       
        </ul>
      </div>
    </div>
  );
};

export default KitchenHeader;
