import { FaSearch } from 'react-icons/fa';
import { FaBell, FaEnvelope } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';

import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './userheader.css';
import React from 'react';

const UserBar = (props) => {
  const { setIsActive, isActive } = props;
  console.log(props)

  function handleClick() {
    console.log('click');
    console.log(setIsActive, isActive);
    setIsActive(!isActive);
  }

  const [loginUser, setLoginUser] = useState({});

  function handleLogout() {
    // setUser(null);
    localStorage.removeItem('user');
    window.location.href = '/login';
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  return (
    <div className="pink-header">
      <div className="search-bar">
        <form>
          <label htmlFor="search-input">
            <FaSearch />
          </label>
          <input
            type="text"
            id="search-input"
            name="search-input"
            placeholder="Search..."
          />
        </form>
        <FaBars className="ham" onClick={handleClick} />
      </div>
      <div class="side-header-details">
        <FaBell className="icon" />
        <FaEnvelope className="icon" />
        <h2>{'Welcome ' + loginUser.name + ''}</h2>
        <button onClick={handleLogout} className="my-button">
          <Link to="/Login">Logout</Link>
        </button>
      </div>
    </div>
  );
};

export default UserBar;
