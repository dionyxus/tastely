import { React, useEffect, useState } from 'react';
import axios from 'axios';
import Header from './header';
import ShowPlan from '../showplan/showplan';
import { Link, NavLink, useNavigate } from 'react-router-dom';
// import "./allkitchens.css"

const AllKitchens = (props) => {
  
  //  const [singleUserKithens, setSingleUserKitchens] = useState([])
  const [allKitchens, setAllKitchens] = useState([]);
  const [apiSuccess, setApiSuccess] = useState(false);
  const navigate = useNavigate();
  //   assignment delete button handle

    const handleViewPlanClick = (userid) => {
      navigate(`/singleuserkitchens/${userid}`)
        
    };

    const imageUrl = "https://www.w3schools.com/html/pic_trulli.jpg";
// 
  // write a hook to get data from the database and set the data to the todoitems state variable
  useEffect(() => {
    const getAllKitchens = async () => {
      try {
        const res = await axios.get('http://localhost:8080/allkitchens');
        setAllKitchens(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllKitchens();
  }, [apiSuccess]);
 

  return (
    <div className="homepage">
      <div>
        <h2>EXPOLORE ALL REGISTERED KITCHENS</h2>
        <ul className="grid-container">
          {allKitchens.map((kitchen) =>
            
            kitchen.usertype === "Owner" ? (
              <li className="grid-item" key={kitchen._id}>
              <img src={imageUrl} alt="Example" />
                <p>Kitchen - {kitchen.name}</p>
                <button className="my-button" onClick={() => handleViewPlanClick(kitchen._id, kitchen.name)} >View Plan</button><br></br><br></br>
              </li>
            ) : (
              ''
            ),
          )}
        </ul>
      </div>
    </div>
  );
};

export default AllKitchens;

// <button onClick={() => handleDeleteClick(showOwner._id)} >Delete Kitchen</button>
