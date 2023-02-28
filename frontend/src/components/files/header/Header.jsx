import React from 'react';
import { Navbar } from '..';
import './Header.css';
function Header (){
    return(
        <section className="header"> 
         <section className="header_logo">
            <a href="/" className="logo" alt="logo">LOGO</a>
         </section>
         <section className="header_navbar">
           <Navbar /> 
         </section>
        </section>


 

    )

}
export default Header;