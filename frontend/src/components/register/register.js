import React, {useState} from "react"
import axios from "axios"
import { Link } from 'react-router-dom'
import "./register.css"

const Register = () => {

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
    }

    const register = () => {
        showData();
        const {name, email, password, reEnterPassword, address, postalcode, contact} = user
        if (name && email && password && (password === reEnterPassword) && address && postalcode && contact ) {
                  
        axios.post("http://localhost:8080/register", user)
        .then(res => alert("Congratulations  " + user.name+ "  Your account has been registered"),
        localStorage.setItem('user', JSON.stringify(user))
        )
        } else {
            alert ("check all your inputs");

        }
    }



    return (
        <div>
        <div className="Register">
        <h1>Tastely Register</h1>
        <div>
        <label>User Type   </label> <br></br>
         <input type="radio" name="usertype" value="Owner" checked={user.usertype === "Owner" ? "Owner" : ""} onChange={handleChange}/>Owner
        <input type="radio" name="usertype" value="Customer" checked={user.usertype==="Customer" ? "Customer" : ""} onChange={handleChange}/>Customer
        </div>
        <label>Name/Store Name  </label> <br></br>
        <input type="text" name="name" value={user.name} placeholder="Enter your name" onChange={handleChange} ></input><br></br>
        <label>Email  </label> <br></br>
        <input type="email" name="email" value={user.email} placeholder="Enter your email" onChange={handleChange}></input><br></br>
        <label>Password  </label> <br></br>
        <input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange}></input><br></br>
        <label>Re-Enter Password  </label> <br></br>
        <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter your  Password" onChange={handleChange}></input><br></br>
        <label>Address  </label> <br></br>
        <input type="text" name="address" value={user.address} placeholder="Enter your address" onChange={handleChange} ></input><br></br>
        <label>Postal Code  </label> <br></br>
        <input type="text" name="postalcode" value={user.postalcode} placeholder="Enter Postal Code" onChange={handleChange} ></input><br></br>
        <label>Contact </label> <br></br>
       
       <div>
       <input type="text" name="contact" value={user.contact} placeholder="Enter your contact" onChange={handleChange} ></input><br></br>
        <button className="button" onClick={register}>Register</button>
        <div>or</div>
        <button className="button">Already have an account?<Link to="/login">Login Here</Link></button>
        </div>
       </div> 
        </div>
    )
    }

export default Register