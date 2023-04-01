import Button from "../dishes/Button"
import Header from "../homepage/header"
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { BACKEND_API } from "../../config";

import './CustomerOrderConfirmation.css'
import { useState } from "react";
import Footer from "../files/footer/Footer";



const CustomerOrderConfirmation = (props) => {

  const navigate = useNavigate();
  let { planid } = useParams();

  const url = `${BACKEND_API}/subscribeplan`;

  const handleOnClickConfirm = () => {

    const data = {
      user: JSON.parse(localStorage.getItem('user'))._id,
      plan: planid,
      date: (new Date).toLocaleDateString()
    };

    //console.log('data:', data);
    if (data) {
      axios
        .post(url, data)
        .then((res) => {
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
  }

  const [Address, setAddress] = useState(props.loginUser.address);
  const [PostalCode, setPostalCode] = useState(props.loginUser.postalcode);
  const [Contact, setContact] = useState(props.loginUser.contact);
  const [CardHolder, cardholder] = useState("Amberdeep Singh");
  const [CardNum, cardnum] = useState("4275 6289 9541 8282");
  const [Expiry, expiry] = useState("09/25");
  const [CVV, cvv] = useState("263");

  return (
    <div>
      <Header />
      <div className="orderconfirm">

        <div className="container1" >
          {/* <div style={{ marginLeft: "auto", marginRight: "auto", width: "50%" }}> */}
          <div className="form-row">
            <div className="form-col-12 form-col-md-6 form-col-lg-12">
              <h2>Confirm Details</h2>
            </div><br></br>


            <div className="form-col-12 form-col-md-6 form-col-lg-3">
              <label>Address</label>
              <br></br>
              <input type="text"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address" />
            </div><br></br>

            <div className="form-col-12 form-col-lg-6">
              <label>Postal Code</label>
              <br></br>
              <input type="text"
                value={PostalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                placeholder="Postal Code" />
            </div><br></br>

            <div className="form-col-12 form-col-md-6 form-col-lg-3">
              <label>Contact No</label>
              <br></br>
              <input type="text"
                value={Contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Contact" />
            </div><br></br>

          </div>
        </div>

        <div className="container2">
          <div className="form-row">
            <div className="form-col-12 form-col-md-6 form-col-lg-3">
              <h2>Payment Method</h2>
            </div><br></br>

            <div className="form-col-12 form-col-md-6 form-col-lg-3">
              <label>Card Holder Name</label><br></br>
              <input type="text"
                value={CardHolder}
                onChange={(e) => cardholder(e.target.value)}
                placeholder="CardHolder Name" />
            </div><br></br>
            <div className="form-col-12 form-col-md-6 form-col-lg-3">
              <label>Card Number</label><br></br>
              <input type="text"
                value={CardNum}
                onChange={(e) => cardnum(e.target.value)}
                placeholder="Card Number" />
            </div><br></br>
            <div className="form-col-12 form-col-md-6 form-col-lg-3">
              <label>Expiry Date</label><br></br>
              <input type="integer"
                value={Expiry}
                onChange={(e) => expiry(e.target.value)}
                placeholder="Expiry Date" />
            </div><br></br>
            <div className="form-col-12 form-col-md-6 form-col-lg-3">
              <label>CVV</label><br></br>
              <input type="integer"
                value={CVV}
                onChange={(e) => cvv(e.target.value)}
                placeholder="CVV" />

            </div>
            <br></br>
            <Button className="confirm" text={"Confirm Order"} onClick={handleOnClickConfirm} style="background-color:brown" />
          </div>

        </div>

      </div>

    </div>

  )
}

export default CustomerOrderConfirmation





