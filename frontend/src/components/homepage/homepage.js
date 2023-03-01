import {React, useEffect, useState} from "react"
import axios from 'axios'
//import { useContext } from "react"
import { Link} from 'react-router-dom'
// import Login from "../login/login"
//import { UserContext } from '../../usercontext';
import "./homepage.css"
import Header from "./header"
 import AllKitchens from "./allkitchens"

const Homepage = (props) => {


//  const [showOwners, setShowOwners] = useState([])
    //  const [apiSuccess, setApiSuccess] = useState(false);

  //  // write a hook to get data from the database and set the data to the todoitems state variable
  // useEffect(() => {
  //   const getShowOwners = async () => {
  //     try {
  //       const res = await axios.get('/allkitchens');
  //       setShowOwners(res.data);
  //       console.log(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getShowOwners();
  // }, [apiSuccess]);

    return (
        <div className="homepage">
        <div><h2>{"Hi " + props.loginUser.name+ " Welcome - User Type - " + props.loginUser.usertype + ""}</h2></div>
        <Header />
       
        
        <AllKitchens/>
            
            

           
        </div>
        
    )
}

export default Homepage

// <button onClick={() => handleDeleteClick(showOwner._id)} >Delete Kitchen</button>