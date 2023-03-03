import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// import "./header.css"


const Header = (props) => {
  const navigate = useNavigate();

  const loginUser = JSON.parse(localStorage.getItem('user'))._id;

  const handleViewSubscribePlanClick = (id) => {
    navigate(`/showsubscribeplans/${id}`);
  };

  return (
    <div className="header-background">
      <div className="header header-max-width-div">
        <ul className="nav">
          <NavLink to="/">Customer Dashboard</NavLink>
          <br></br>
          <br></br>
          <NavLink to="/myprofile">View my profile</NavLink>
          <br></br>
          <br></br>
          <button onClick={(props) => handleViewSubscribePlanClick(loginUser)}>
            View my subscribed plans
          </button>
          <button>
            <Link to="/Login">Logout</Link>
          </button>
          <br></br>
        </ul>
      </div>
    </div>
  );
};

export default Header;

