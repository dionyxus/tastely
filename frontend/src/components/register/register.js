import React, {useState} from "react"
import axios from "axios"
import { Link } from 'react-router-dom'
import landing from './landing.JPG';
import "./register.css"
import { BACKEND_API } from "../../config";

const Register = () => {



    //  const backendUrl = process.env.REACT_APP_URL;

    // const { PROJECT_BACKEND_URL } = process.env;

    const [ user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: "",
        usertype: "Owner",
        address: "",
        postalcode: "",
        contact: ""
    })

    const handleChange = e => {
        const {name,value} = e.target
        setUser ({
            ...user,
            [name]: value
        })
    }

    const showData = () => {
        console.log('Form:', user)
        console.log('URL', process.env.REACT_APP_URL)
    }

    const register = () => {
        showData();
        const {name, email, password, reEnterPassword, address, postalcode, contact} = user
        if (name && email && password && (password === reEnterPassword) && address && postalcode && contact ) {
                  
        axios.post(`${BACKEND_API}/register`, user)
        .then(res => alert("Congratulations  " + user.name+ "  Your account has been registered"),
        localStorage.setItem('user', JSON.stringify(user))
        )
        } else {
            alert ("check all your inputs");

        }
    }



    return (
        <div className="Login">

        <div className="login-image">
        <img src={landing} alt="Login Page" />
      </div>

        <div className="login-form">
        

        <h1>Create Your Free Account Here</h1>
        <div className="user-type">
        <label>User Type   </label> 
         <input type="radio" name="usertype" value="Owner" checked={user.usertype === "Owner" ? "Owner" : ""} onChange={handleChange}/>Owner
        <input type="radio" name="usertype" value="Customer" checked={user.usertype==="Customer" ? "Customer" : ""} onChange={handleChange}/>Customer
        </div>
        <label>Name/Store Name  </label>
        <input type="text" name="name" value={user.name} placeholder="Enter your name" onChange={handleChange} ></input>
        <label>Email  </label> 
        <input type="email" name="email" value={user.email} placeholder="Enter your email" onChange={handleChange}></input>
        <label>Password  </label> 
        <input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange}></input>
        <label>Re-Enter Password  </label> 
        <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter your  Password" onChange={handleChange}></input>
        <label>Address  </label> 
        <input type="text" name="address" value={user.address} placeholder="Enter your address" onChange={handleChange} ></input>
        <label>Postal Code  </label> 
        <input type="text" name="postalcode" value={user.postalcode} placeholder="Enter Postal Code" onChange={handleChange} ></input>
        <label>Contact </label> 
       
       
       <input type="text" name="contact" value={user.contact} placeholder="Enter your contact" onChange={handleChange} ></input>
        <button className="button" onClick={register}>Register</button>
       <div class="register-link"><Link to="/login">Already have an account?Login Here</Link></div>
        </div>
       </div> 
        
    )
    }

export default Register