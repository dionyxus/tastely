import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import KitchenHeader from '../homepage/kitchenheader';
import '../ownerpage/ownerpage.css';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import './createplan.css';
import { FaBell, FaEnvelope } from 'react-icons/fa';
import UserBar from '../homepage/userheader';
import { BACKEND_API } from '../../config';
import Footer from '../files/footer/Footer';
//import DynamicFields from './dynamicfields';
// import dynamicfield from '../../../../backend/models/dynamicfield';
// import { Link, Outlet } from 'react-router-dom';




const CreatePlan = (props) => {
  const [createPlan, setCreatePlan] = useState({
    name: '',
    price: '',
    user: '',
    username: '',
  });

  const [dynamicFields, setDynamicFields] = useState([{ key: '', info: '' }]);

  const handleFormChange = (index, event) => {
    let data = [...dynamicFields];
    data[index][event.target.name] = event.target.value;
    setDynamicFields(data);
  };

  const addFields = () => {
    let newfield = { key: '', info: '' };
    setDynamicFields([...dynamicFields, newfield]);
  };

  const removeFields = (index) => {
    let data = [...dynamicFields];
    data.splice(index, 1);
    setDynamicFields(data);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(dynamicFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreatePlan({
      ...createPlan,
      [name]: value,
      user: JSON.parse(localStorage.getItem('user'))._id,
      username: JSON.parse(localStorage.getItem('user')).name,
    });
  };

  const showData = () => {
    console.log('Form:', createPlan);
  };

  const submitplan = (e) => {

    setCreatePlan({
      name: '',
      price: '',
      user: '',
      username: '',
    });

    setDynamicFields([{ key: '', info: '' }]);

    console.log(dynamicFields);
    showData();
    // const loggeduser = JSON.parse(localStorage.getItem('user'))
    const { name, price } = createPlan;

    const url = `${BACKEND_API}/createplan`;
    const data = {
      name: createPlan.name,
      price: createPlan.price,
      dynamicfields: dynamicFields,
      user: createPlan.user,
      username: createPlan.username,
    };
    console.log('data:', data);

    if (name && price) {
      axios.post(url, data).then((res) => alert('Your plan has been created'));
      console.log(data);
    } else {
      alert('check all your inputs');
    }
  };

  return (
    <div className="ownerpage">
      <div className="side-menu-bar">
        <KitchenHeader />
      </div>

      <div className="user-header">
        <UserBar />
      </div>

      <div className="page-content create-plan">
        <div class="createplan-form">
          <h1 className='heading'>CREATE YOUR PLAN</h1>

          <div className="border-form">
            <label>Enter the name </label>

            <input
              type="text"
              name="name"
              value={createPlan.name}
              placeholder="Enter plan's name"
              onChange={handleChange}
            ></input>

            <label>Enter the price </label>

            <input
              type="text"
              name="price"
              value={createPlan.price}
              placeholder="Enter plan's price"
              onChange={handleChange}
            ></input>
            <label>Enter desired info </label>
            {dynamicFields.map((input, index) => {
              return (
                <div className="dunamic-form" key={index}>
                  <input
                    name="key"
                    placeholder="Key"
                    value={input.key}
                    onChange={(event) => handleFormChange(index, event)}
                  />
                  <input
                    name="info"
                    placeholder="Info"
                    value={input.info}
                    onChange={(event) => handleFormChange(index, event)}
                  />
                  <button className='my-button3' onClick={() => removeFields(index)}>Remove</button>
                  <button className='my-button3' onClick={addFields}>Add More</button>
                  <br></br>
                </div>
              );
            })}

            <button className="my-button2" onClick={submitplan}>
              Submit Plan
            </button>
          </div>
        </div>
      </div>

      <div className="site-footer">
        <Footer />
      </div>
    </div>
  );
};

export default CreatePlan;
