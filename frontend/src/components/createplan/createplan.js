import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import KitchenHeader from '../homepage/kitchenheader';
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
    console.log(dynamicFields);
    showData();
    // const loggeduser = JSON.parse(localStorage.getItem('user'))
    const { name, price } = createPlan;

    const url = 'http://localhost:8080/createplan';
    const data = {
      name: createPlan.name,
      price: createPlan.price,
      dynamicfields: dynamicFields,
      user: createPlan.user,
      username: createPlan.username,
      
    };
    console.log("data:", data)

    if (name && price) {
      axios.post(url, data).then((res) => alert('Your plan has been created'));
      console.log(data)
    } else {
      alert('check all your inputs');
    }
  };

  return (
    <div>
      <KitchenHeader />
      <div className="CreatePlan">
        <h1>Hi {props.loginUser.name} - Create your plan</h1>
        <label>Enter the name </label>
        <br></br>
        <input
          type="text"
          name="name"
          value={createPlan.name}
          placeholder="Enter plan's name"
          onChange={handleChange}
        ></input>
        <br></br>
        <label>Enter the price </label>
        <br></br>
        <input
          type="text"
          name="price"
          value={createPlan.price}
          placeholder="Enter plan's price"
          onChange={handleChange}
        ></input>
        <br></br>
        <br></br>
        <form onSubmit={submit}>
          {dynamicFields.map((input, index) => {
            return (
              <div key={index}>
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
                <button onClick={() => removeFields(index)}>Remove</button>
              </div>
            );
          })}
        </form>
        <button onClick={addFields}>Add More Fields</button>
        
      </div>
      <button className="my-button" onClick={submitplan}>
        Create your plan
      </button>
    </div>
  );
};

export default CreatePlan;
