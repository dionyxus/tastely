import Button from "../dishes/Button"
import Header from "../homepage/header"
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CustomerOrderConfirmation = () => {

  const navigate = useNavigate();
  let { planid } = useParams();

  console.log("Plan ID - " + planid);


  const handleOnClickConfirm = () => {

    const url = 'http://localhost:8080/subscribeplan';

    const data = {

      user: JSON.parse(localStorage.getItem('user'))._id,
      plan: planid,

    };

    console.log('data:', data);
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

  return (
    <div>
      <Header />
      <div className="container" >
        <div style={{ marginLeft: "auto", marginRight: "auto", width: "50%" }}>
        Order Page<br></br>
        Order Details
        <br></br>
        <Button text={"Confirm Order"} onClick={handleOnClickConfirm} />
        </div>
      </div>
    </div>
  )
}

export default CustomerOrderConfirmation