import React from "react"
import { Link } from 'react-router-dom'

import "./ownerpage.css"

const Ownerpage = props => {
    return (
        <div className="ownerpage">
        <div><h2>{"Hi " + props.loginUser.name+ "Welcome"}</h2></div>
         
            <Link to="/createPlan"> <button >Create a Plan</button> </Link>
            <Link to="/showPlan"> <button >Show my plans</button> </Link>
            <Link to="/createMenu"> <button >Set Up Menu</button> </Link>
            <Link to="/showMenu"> <button >Show my menus</button> </Link>
            <button className="button"><Link to="/Login">Logout</Link></button>
        </div>
    )
}

export default Ownerpage