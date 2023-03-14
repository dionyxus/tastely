import { FaSearch } from 'react-icons/fa';
import { FaBell, FaEnvelope } from 'react-icons/fa';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './userheader.css';
import React from 'react';

const UserBar = (props) => {

    const [loginUser, setLoginUser] = useState({});

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {
          setLoginUser(user)
        }
      }, [])
    
  return (
    <div className='pink-header'>
    <div className="search-bar">
      <form>
        <label htmlFor="search-input">
          <FaSearch />
        </label>
        <input type="text" id="search-input" name="search-input" placeholder="Search..." />
        
      </form>
    </div>
    <div class="side-header-details">
    <FaBell />
      <FaEnvelope />
      <h2>{'Welcome ' + loginUser.name + ''}</h2>
        <button style={{ backgroundColor: '#ff5252' }} className="my-button">
          <Link to="/Login">Logout</Link>
        </button>
        </div>
        </div>
  );
};

export default UserBar;