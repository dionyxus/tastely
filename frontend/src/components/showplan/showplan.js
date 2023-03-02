import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import KitchenHeader from '../homepage/kitchenheader';

const ShowPlan = (props) => {
  const [showplans, setShowPlans] = useState([]);
  const [apiSuccess, setApiSuccess] = useState(false);

  //assignment delete button handle
  const handleDeleteClick = (id) => {
    setApiSuccess(false);
    axios.delete(`http://localhost:8080/showplan/${id}`).then(() => {
      setApiSuccess(true);
      console.log('delete success');
    });
  };

  //write a hook to get data from the database and set the data to the todoitems state variable
  useEffect(() => {
    const getShowPlans = async () => {
      try {
        const res = await axios.get('http://localhost:8080/showplan');
        setShowPlans(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getShowPlans();
  }, [apiSuccess]);

  return (
    <div>
      <KitchenHeader />
      <div className="showPlans">
        <h2>Hi {props.loginUser.name} - Your all created plans </h2>
        <ul>
          {showplans.map((showplan) => {
            // console.log(props, showplan);
            return props.loginUser.name == showplan.username ? (
              <li key={showplan._id}>
                <p>Plan title - {showplan.name}</p>
                <p>Plan Price - {showplan.price}</p>

                <ul>
                  {showplan.dynamicfields.map((dynamicfield) => {
                    return (
                      <li key={dynamicfield._id}>
                        <p>
                          {dynamicfield.key} - {dynamicfield.info}
                        </p>
                      </li>
                    );
                  })}
                </ul>
                <button onClick={() => handleDeleteClick(showplan._id)}>
                  Delete Plan
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

export default ShowPlan;

