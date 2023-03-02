import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import KitchenHeader from './kitchenheader';
// import { Link, Outlet } from 'react-router-dom';

const ShowCustomerSubscribePlan = (props) => {
  const [showCustomerSubscribePlans, setShowCustomerSubscribePlans] = useState(
    [],
  );
  const [apiSuccess, setApiSuccess] = useState(false);

  
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
            return props.loginUser.name ==
              showCustomerSubscribePlan.plan.username ? (
              <li className="grid-item" key={showCustomerSubscribePlan._id}>
                <p>Plan title - {showCustomerSubscribePlan.plan.name}</p>
                <p>User Name - {showCustomerSubscribePlan.user.name}</p>
                <p>User Contact - {showCustomerSubscribePlan.user.contact}</p>
              </li>
            ) : (
              ''
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ShowCustomerSubscribePlan;


