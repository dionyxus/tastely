import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import KitchenHeader from './kitchenheader';
// import { Link, Outlet } from 'react-router-dom';

const ShowCustomerSubscribePlan = (props) => {
  const [showCustomerSubscribePlans, setShowCustomerSubscribePlans] = useState([]);
  const [apiSuccess, setApiSuccess] = useState(false);

//   const navigate = useNavigate();
  //   assignment delete button handle

    // const handleViewSubscribePlanClick = (userid) => {
    //   navigate(`/showsubscribeplans/${userid}`)
        
    // };

  let { userid } = useParams();

  //assignment delete button handle
  const handleDeleteClick = (id) => {
    setApiSuccess(false);
    axios.delete(`http://localhost:8080/showcustomersubscribeplan/${id}`).then(() => {
      setApiSuccess(true);
      console.log('delete success');
    });
  };

  //write a hook to get data from the database and set the data to the todoitems state variable
  useEffect(() => {
    const getShowCustomerSubscribePlans = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/showcustomersubscribeplan`,
        );
        setShowCustomerSubscribePlans(res.data);
        // console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getShowCustomerSubscribePlans();
  }, [apiSuccess]);

  

  return (
    <div>
    <h2>Hi {props.loginUser.name} - Your all customers </h2>
      <KitchenHeader />
      <div className="showPlans">
        
        <ul className="grid-container">
          {showCustomerSubscribePlans.map((showCustomerSubscribePlan) => {
            console.log(showCustomerSubscribePlan);
            return props.loginUser.name == showCustomerSubscribePlan.plan.username ? (
              <li className="grid-item" key={showCustomerSubscribePlan._id}>
                <p>Plan title - {showCustomerSubscribePlan.plan.name}</p>
                <p>User Name - {showCustomerSubscribePlan.user.name}</p>
                <p>User Contact - {showCustomerSubscribePlan.user.contact}</p>
                
                

                
              </li>
             
            ) 
           
            : (
              ''
            );
          })}
        </ul>
        


      </div>
    </div>
  );
};

export default ShowCustomerSubscribePlan;

//props.loginUser._id == showplan.user ?

// <button onClick={() => handleDeleteClick(showplan._id)}>
//                           Delete Plan
//                         </button>

// <ul>
//                   {showSubscribePlan.dynamicfields.map((dynamicfield) => {
//                     return (
//                       <li key={dynamicfield._id}>
//                         <p>
//                           {dynamicfield.key} - {dynamicfield.info}
//                         </p>
//                       </li>
//                     );
//                   })}
//                 </ul>

// <button onClick={() => handleViewSubscribePlanClick(showSubscribePlan.user._id)}>View Subscribe Plan</button>


// <button
                //   onClick={() => handleDeleteClick(showSubscribePlan._id)}
                // >
                //   Delete Plan
                // </button>