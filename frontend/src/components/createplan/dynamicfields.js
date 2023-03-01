import React from 'react';
import { useState } from 'react';
//import axios from 'axios';
//import KitchenHeader from '../homepage/kitchenheader';
// import { Link, Outlet } from 'react-router-dom';

const DynamicFields = (props) => {
  const [dynamicFields, setDynamicFields] = useState([{ key: '', info: '' }]);

  const handleChange = (index, event) => {
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

  return (
    <div className="App">
      <form onSubmit={submit}>
        {dynamicFields.map((input, index) => {
          return (
            <div key={index}>
              <input
                name="key"
                placeholder="Key"
                value={input.key}
                onChange={(event) => handleChange(index, event)}
              />
              <input
                name="info"
                placeholder="Info"
                value={input.info}
                onChange={(event) => handleChange(index, event)}
              />
              <button onClick={() => removeFields(index)}>Remove</button>
            </div>
          );
        })}
      </form>
      <button onClick={addFields}>Add More..</button>
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default DynamicFields;
