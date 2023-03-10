import { React } from 'react';
import Header from './header';
import AllKitchens from './allkitchens';
import KitchenHeader from './kitchenheader';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { FaBell, FaEnvelope } from 'react-icons/fa';
import './myprofile.css';
import '../ownerpage/ownerpage.css';

const MyProfile = (props) => {
  const navigate = useNavigate();

  
  function render() {
    if (props.loginUser.usertype === 'Owner') {
      return (
        <div className='ownerpage'>
          <div className="side-menu-bar">
            <KitchenHeader />
          </div>
          <div class="user-header">
          <FaBell />
      <FaEnvelope />
            <h2>{'Welcome ' + props.loginUser.name + ''}</h2>
            <button className="button">
              <Link to="/Login">Logout</Link>
            </button>
          </div>
          <div class="page-content">
        <h1>My Profile</h1>
        <div class="profile-border-form">
          <p>{' Name - ' + props.loginUser.name + ''}</p>
          <p>{' User Type - ' + props.loginUser.usertype}</p>
          <p>{' Contact - ' + props.loginUser.contact}</p>
          <p>{' Email - ' + props.loginUser.email}</p>
          <p>{' Address - ' + props.loginUser.address}</p>
        </div>
        </div>
        </div>
      );
    } else {
      const loginUser = JSON.parse(localStorage.getItem('user'))._id;

      const handleViewSubscribePlanClick = (id) => {
        navigate(`/showsubscribeplans/${id}`);
      };
      return (
        <div className='homepage'>
        <div className="user-header">
          <NavLink to="/home">Homepage</NavLink>
          <NavLink to="/myprofile">View my profile</NavLink>
          <button
            className="my-button"
            onClick={(props) => handleViewSubscribePlanClick(loginUser)}
          >
            View my subscribed plans
          </button>
          <h2>{'Welcome ' + props.loginUser.name + ''}</h2>
          <button className="button">
            <Link to="/Login">Logout</Link>
          </button>
        </div>
        <div class="page-content">
        <h1>My Profile</h1>
        <div class="profile-border-form">
          <p>{' Name - ' + props.loginUser.name + ''}</p>
          <p>{' User Type - ' + props.loginUser.usertype}</p>
          <p>{' Contact - ' + props.loginUser.contact}</p>
          <p>{' Email - ' + props.loginUser.email}</p>
          <p>{' Address - ' + props.loginUser.address}</p>
        </div>
      </div>
      </div>
      );
    }
  }

  return (
    
      <div>
        {render()}
       
      </div>
    
  );
};

export default MyProfile;

//

//  if (props.loginUser.usertype === "owner") {
//           return  <KitchenHeader/>
//         }
//         else {
//           return  <Header/>
//         }
//        }

// {render()}
