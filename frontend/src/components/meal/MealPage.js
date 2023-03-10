import Header from "../homepage/header"
import WeekCalender from "./WeekCalender"
import { Link, useParams, useNavigate } from 'react-router-dom';

const MealPage = () => {

  let { orderid } = useParams();

  //console.log(orderid);

  return (
    <div>
      <Header/>
      <h2>Set Meals for the week</h2>
      <WeekCalender orderId={orderid} />
    </div>
  )
}

export default MealPage