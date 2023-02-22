import {React, useEffect, useState} from "react"
import axios from 'axios'
//import { useContext } from "react"
import { Link} from 'react-router-dom'
// import Login from "../login/login"
//import { UserContext } from '../../usercontext';
import "./homepage.css"

const Homepage = (props) => {

// const {loginUser} = useContext(UserContext);
const [showOwners, setShowOwners] = useState([])
    const [apiSuccess, setApiSuccess] = useState(false);

    //write a hook to get data from the database and set the data to the todoitems state variable
  useEffect(() => {
    const getShowOwners = async () => {
      try {
        const res = await axios.get('http://localhost:8080/showowners');
        setShowOwners(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getShowOwners();
  }, [apiSuccess]);

    return (
        <div className="homepage">
       
        <div><h2>{"Hi " + props.loginUser.name+ "Welcome"}</h2></div>
      
            <Link to="/subscribeplan"> <button >Show subscription plans</button> </Link>
            <button className="button"><Link to="/Login">Logout</Link></button>
        </div>
    )
}

export default Homepage