import React from 'react';
import './Navbar.css';

function Navbar () {
    return(
        <section className="navbar">
            <a href="/" className="navbar-item" alt="home">Home</a>
            <a href="/menu" className="navbar-item" alt="menu">Menu</a>
            <a href="/blog" className="navbar-item" alt="blog">Blog</a>
            <a href="/profile" className="navbar-item" alt="profile">Profile</a>


        </section>
    )
}
export default Navbar;