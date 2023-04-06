import Button from '../dishes/Button';
import Header from '../homepage/header';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { BACKEND_API } from '../../config';

import './CustomerOrderConfirmation.css';
import { useState } from 'react';
import Footer from '../files/footer/Footer';

const CustomerOrderConfirmation = (props) => {
  const navigate = useNavigate();
  let { planid } = useParams();

  const url = `${BACKEND_API}/subscribeplan`;

  const handleOnClickConfirm = () => {
    const data = {
      user: JSON.parse(localStorage.getItem('user'))._id,
      plan: planid,
      date: new Date().toLocaleDateString(),
    };

    //console.log('data:', data);
    if (data) {
      axios.post(url, data).then((res) => {
        alert('Your have subcribed the plan');

        //Open Meal Page
        //Make Order ID too.
        console.log('res - ', res.data);
        navigate(`/setmealpage/${res.data.data._id}`);
      });
      //      console.log(data);
    } else {
      alert('check all your inputs');
    }
  };

  const [Address, setAddress] = useState(props.loginUser.address);
  const [PostalCode, setPostalCode] = useState(props.loginUser.postalcode);
  const [Contact, setContact] = useState(props.loginUser.contact);
  const [CardHolder, cardholder] = useState("Amberdeep Singh");
  const [CardNum, cardnum] = useState("4275 6289 9541 8282");
  const [Expiry, expiry] = useState("09/25");
  const [CVV, cvv] = useState("263");

  return (
    <div className="homepage customer-side">
    
      <Header />

      <div className="orderconfirm">
        <div className="form-container">
          <h2>Confirm Details</h2>

          <div className="control">
            <label>Address</label>
            <input
              type="text"
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
            />
          </div>

          <div className="control">
            <label>Postal Code</label>
            <input
              type="text"
              value={PostalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              placeholder="Postal Code"
            />
          </div>

          <div className="control">
            <label>Contact No</label>
            <input
              type="text"
              value={Contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Contact"
            />
          </div>
        </div>

        <div className="form-container">
          <h2>Payment Method</h2>

          <div className="control">
            <label>CardHolder Name</label>
            <input
              type="text"
              value={CardHolder}
              onChange={(e) => cardholder(e.target.value)}
              placeholder="CardHolder Name"
            />
          </div>

          <div className="control">
            <label>Card Number</label>
            <input
              type="text"
              value={CardNum}
              onChange={(e) => cardnum(e.target.value)}
              placeholder="Card Number"
            />
          </div>

          <div className="control">
            <label>Expiry Date</label>
            <input
              type="integer"
              value={Expiry}
              onChange={(e) => expiry(e.target.value)}
              placeholder="Expiry Date"
            />
          </div>

          <div className="control">
            <label>CVV</label>
            <input
              type="integer"
              value={CVV}
              onChange={(e) => cvv(e.target.value)}
              placeholder="CVV"
            />
          </div>

          <Button
            className="confirm"
            text={'Confirm Order'}
            onClick={handleOnClickConfirm}
            style="background-color:brown"
          />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerOrderConfirmation;
