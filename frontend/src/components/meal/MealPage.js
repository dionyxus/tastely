import Header from "../homepage/header"
import WeekCalender from "./WeekCalender"
import { FaBell, FaEnvelope } from 'react-icons/fa';
import { NavLink, useParams, Link, useNavigate } from 'react-router-dom';
//import ViewMealPage from "./ViewMealPage";
import Footer from "../files/footer/Footer";

const MealPage = (props) => {

  let { orderid } = useParams();
  const navigate = useNavigate();

  //console.log(orderid);
  const loginUser = JSON.parse(localStorage.getItem('user'))._id;

  const handleViewSubscribePlanClick = (id) => {
    navigate(`/showsubscribeplans/${id}`);
  };

  return (
    <div className="homepage customer-side">
      <Header />
      <div className="set-meals- section" style={{marginLeft: "auto",marginRight:"auto", width:"50%", height: "650px"}}>
        <br></br>
        <h2 style={{textAlign:"center"}}>Set Meals</h2>
        <br></br>
        <WeekCalender orderId={orderid} />
      </div>
      <div className="site-footer">
                <Footer />
            </div>
    </div>
  )
}

export default MealPage