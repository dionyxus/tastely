import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {NavLink, Link, useParams, useNavigate } from 'react-router-dom';
import Header from './header';
// import {NavLink, Link, Outlet } from 'react-router-dom';
import { BACKEND_API } from '../../config';

const ShowSubscribePlan = (props) => {
  const [showSubscribePlans, setShowSubscribePlans] = useState([]);
  const [apiSuccess, setApiSuccess] = useState(false);

  //   const navigate = useNavigate();
  //   assignment delete button handle

  // const handleViewSubscribePlanClick = (userid) => {
  //   navigate(`/showsubscribeplans/${userid}`)

  // };

  let { userid } = useParams();

  const navigate = useNavigate();

  // const { id } = useParams();

 

  //assignment delete button handle
  const handleDeleteClick = (id) => {
    setApiSuccess(false);
    axios.delete(`${BACKEND_API}/showsubscribeplan/${id}`).then(() => {
      setApiSuccess(true);
      console.log('delete success');
    });
  };

  //write a hook to get data from the database and set the data to the todoitems state variable
  useEffect(() => {
    const getShowSubscribePlans = async () => {
      try {
        const res = await axios.get(
          `${BACKEND_API}/showsubscribeplan/${userid}`,
        );
        setShowSubscribePlans(res.data);
        // console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getShowSubscribePlans();
  }, [apiSuccess]);

  return (
    <div className="homepage">
      
   <Header />

      
      <div className="page-content">
      <h2 className='heading'>YOUR SUBSCRIBED PLAN </h2>
        <ul className="showplan-details">
          {showSubscribePlans.map((showSubscribePlan) => {
            console.log(showSubscribePlan);
            return 2 ? (
              <li key={showSubscribePlan._id}>
                <p style={{ fontSize: '32px', padding: 10 }}>{showSubscribePlan.plan.name}</p>
                <p style={{ color: 'orange', fontSize: '36px', padding: 12 }}>{showSubscribePlan.plan.price}</p>
                <ul className="dynamic-details">
                    {showSubscribePlan.plan.dynamicfields.map((dynamicfield) => {
                      return (
                        <li key={dynamicfield._id}>
                          <p>
                            {dynamicfield.key} - {dynamicfield.info}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                <button style={{ marginTop: '40px' }}
                  className="my-button"
                  onClick={() => handleDeleteClick(showSubscribePlan._id)}
                >
                  Unsubscribe
                </button>
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

export default ShowSubscribePlan;

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
