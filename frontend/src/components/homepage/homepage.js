import { React } from 'react';
import Header from './header';
import AllKitchens from './allkitchens';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import './homepage.css';
import '../ownerpage/ownerpage.css'



  // const { id } = useParams();

  

const Homepage = (props) => {

  const loginUser = JSON.parse(localStorage.getItem('user'))._id;

  const navigate = useNavigate();

  const handleViewSubscribePlanClick = (id) => {
    navigate(`/showsubscribeplans/${id}`);
  };

  return (
    <div className="homepage">
    <div className="user-header">
    <NavLink to="/home">Homepage</NavLink>
          <NavLink to="/myprofile">View my profile</NavLink>
          <button className="my-button" onClick={(props) => handleViewSubscribePlanClick(loginUser)}>
        View my subscribed plans
      </button>
    <h2>{'Welcome ' + props.loginUser.name + ''}</h2>
    <button className="button">
      <Link to="/Login">Logout</Link>
    </button>
    
      
  </div>

      
      <div class="page-content">
      <h2>EXPOLORE ALL REGISTERED KITCHENS</h2>
      <AllKitchens />
      </div>
    </div>
  );
};

export default Homepage;
