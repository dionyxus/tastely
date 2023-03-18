import Button from "../dishes/Button"
import Header from "../homepage/header"
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { BACKEND_API } from "../../config";

import './CustomerOrderConfirmation.css' 
import { useState } from "react";



const CustomerOrderConfirmation = ({}) => {

  const navigate = useNavigate();
  let { planid } = useParams();

  console.log("Plan ID - " + planid);


  const handleOnClickConfirm = () => {

    const url = `${BACKEND_API}/subscribeplan`;

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
          //console.log('res - ',res.data);
          navigate(`/setmealpage/${res.data.data._id}`);

        });
      //      console.log(data);
    } else {
      alert('check all your inputs');
    }
  }


  const [StreetName, street] = useState("");
  const [Unit, unit] = useState("");
  const [PostalCode, postalcode] = useState("");
  const [CityName, city] = useState("");
  const [Province, province] = useState("");
  const [CardHolder, cardholder] = useState("");
  const [CardNum, cardnum] = useState("");
  const [Expiry, expiry] = useState("");
  const [CVV, cvv] = useState("");

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
              {/* <label></label> */}
              {/* <label>Streer Name</label> */}
              <input type="text"
                value={StreetName}
                onChange={(e) => street(e.target.value)}
                placeholder="Streer Name" />
            </div><br></br>

            <div className="form-col-12 form-col-md-6 form-col-lg-3">
              {/* <label>Unit</label> */}
              <input type="text"
                value={Unit}
                onChange={(e) => unit(e.target.value)}
                placeholder="Unit" />
            </div><br></br>
            <div className="form-col-12 form-col-lg-6">
              {/* <label>Postal Code</label> */}
              <input type="text"
                value={PostalCode}
                onChange={(e) => postalcode(e.target.value)}
                placeholder="Postal Code" />
            </div><br></br>

            <div className="form-col-12 form-col-md-6 form-col-lg-3">
              {/* <label>City</label> */}
              <input type="text"
                value={CityName}
                onChange={(e) => city(e.target.value)}
                placeholder="City" />
            </div><br></br>

            <div className="form-col-12 form-col-md-6 form-col-lg-3">
              {/* <label>Province</label> */}
              <input type="text"
                value={Province}
                onChange={(e) => province(e.target.value)}
                placeholder="Province" />
            </div><br></br>
          </div>
        </div>

        <div className="container2">
          <div className="form-row">
            <div className="form-col-12 form-col-md-6 form-col-lg-3">
              <h2>Payment Method</h2>
            </div><br></br>

            <div className="form-col-12 form-col-md-6 form-col-lg-3">
              {/* <label>CardHolder Name</label> */}
              <input type="text"
                value={CardHolder}
                onChange={(e) => cardholder(e.target.value)}
                placeholder="CardHolder Name" />
            </div><br></br>
            <div className="form-col-12 form-col-md-6 form-col-lg-3">
              {/* <label>Card Number</label> */}
              <input type="text"
                value={CardNum}
                onChange={(e) => cardnum(e.target.value)}
                placeholder="Card Number" />
            </div><br></br>
            <div className="form-col-12 form-col-md-6 form-col-lg-3">
              {/* <label>Expiry Date</label> */}
              <input type="integer"
                value={Expiry}
                onChange={(e) => expiry(e.target.value)}
                placeholder="Expiry Date" />&nbsp;
              {/* <label>CVV</label> */}
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





