import React from "react"
import { Link } from 'react-router-dom'
import KitchenHeader from "../homepage/kitchenheader"

import "./ownerpage.css"

const Ownerpage = props => {
    return (
        <div className="ownerpage">
        <div><h2>{"Hi " + props.loginUser.name+ " Welcome - User Type - " + props.loginUser.usertype + ""}</h2></div>
   <KitchenHeader/>
  
       
           
        </div>
    )
}

export default Ownerpage