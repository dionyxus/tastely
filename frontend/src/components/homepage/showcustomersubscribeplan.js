import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import KitchenHeader from './kitchenheader';
import "../ownerpage/ownerpage.css";
import { FaBell, FaEnvelope } from 'react-icons/fa';
import UserBar from './userheader';
import { BACKEND_API } from '../../config';
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
          `${BACKEND_API}/showcustomersubscribeplan`,
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
    <div className='ownerpage'>
      
      <div className="side-menu-bar">
          <KitchenHeader />
        </div>
        <div className="user-header">
        <UserBar />
      </div>
    
      <div className="page-content">
      <h2 className='heading'> MY CUSTOMERS </h2>
        <ul style={{alignItems: 'center'}}className="showplan-details">
          {showCustomerSubscribePlans.map((showCustomerSubscribePlan) => {
//            console.log(showCustomerSubscribePlan);
            return props.loginUser.name ==
              showCustomerSubscribePlan.plan.username ? (
              <li key={showCustomerSubscribePlan._id}>
                <p>{showCustomerSubscribePlan.plan.name}</p>
                <p style={{ color: 'orange', fontSize: '36px', padding: 12 }}>{showCustomerSubscribePlan.plan.price}</p>
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


