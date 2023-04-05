import { React } from 'react';
import Header from './header';
import AllKitchens from './allkitchens';
import KitchenHeader from './kitchenheader';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { FaBell, FaEnvelope } from 'react-icons/fa';
import './myprofile.css';
import '../ownerpage/ownerpage.css';
import UserBar from './userheader';
import Footer from '../files/footer/Footer';

const MyProfile = (props) => {
  const navigate = useNavigate();
  const { isActive, setIsActive } = props;


  function render() {
    if (props.loginUser.usertype === 'Owner') {
      return (
        <div className='ownerpage'>
          <div className={`${isActive ? 'show-side-bar' : ''} side-menu-bar`}>
            <KitchenHeader isActive={isActive} setIsActive={setIsActive}/>
          </div>
          <div className="user-header">
            <UserBar isActive={isActive} setIsActive={setIsActive}/>
          </div>
          <div class="page-content">
            <h1 className='heading'>MY KITCHEN PROFILE</h1>
            <div class="profile-border-form">
              <p><span className='profile-key'>Name</span><span className='profile-info'>{props.loginUser.name}</span></p>
              <p><span className='profile-key'>User Type</span><span className='profile-info'>{props.loginUser.usertype}</span></p>
              <p><span className='profile-key'>Contact</span><span className='profile-info'>{props.loginUser.contact}</span></p>
              <p><span className='profile-key'>Email</span><span className='profile-info'>{props.loginUser.email}</span></p>
              <p><span className='profile-key'>Address</span><span className='profile-info'>{props.loginUser.address}</span></p>
            </div>
          </div>

          <div className="site-footer">
            <Footer />
          </div>
        </div>
      );
    } else {



      return (
        <div className='homepage'>
          <Header />
          <div class="page-content">
            <h1 className='heading'>MY PROFILE</h1>
            <div class="profile-border-form">
              <p><span className='profile-key'>Name</span><span className='profile-info'>{props.loginUser.name}</span></p>
              <p><span className='profile-key'>User Type</span><span className='profile-info'>{props.loginUser.usertype}</span></p>
              <p><span className='profile-key'>Contact</span><span className='profile-info'>{props.loginUser.contact}</span></p>
              <p><span className='profile-key'>Email</span><span className='profile-info'>{props.loginUser.email}</span></p>
              <p><span className='profile-key'>Address</span><span className='profile-info'>{props.loginUser.address}</span></p>
            </div>
          </div>
          <Footer />

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
