import React from 'react';
import KitchenHeader from '../homepage/kitchenheader';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import './ownerpage.css';
  import Footer from '../files/footer/Footer';
  import { FaBell, FaEnvelope } from 'react-icons/fa';
  import graph from './graph.png';
  import logo from './logo.png';
  import UserBar
   from '../homepage/userheader';
const Ownerpage = (props) => {
  // const navigate = useNavigate();
  // const loginUser = JSON.parse(localStorage.getItem('user'))._id;

  return (
    <div className="ownerpage">
      <div className="side-menu-bar">
        <KitchenHeader />
      </div>
    
      <div className="user-header">
        <UserBar />
      </div>

      <div className='page-content'>
      <h1>Overview</h1><img src={graph} alt="graph" height="400px" width="600px"/></div>

      <div>
      
      </div>

      <div className="site-footer">
      <Footer />
    </div>

    </div>

    
  );
};

export default Ownerpage;
