import { React } from 'react';
import Header from './header';
import AllKitchens from './allkitchens';
import KitchenHeader from './kitchenheader';
// import './myprofile.css';

const MyProfile = (props) => {
  return (
    <div className="homepage">
      <div>
      <KitchenHeader/>
        <h2>
          <h1>
          My Profile</h1>
            <p>{" Name - " + props.loginUser.name + " - " +props.loginUser.usertype}</p>
            <p>{" Contact - " + props.loginUser.contact}</p>
            <p>{" Email - " + props.loginUser.email}</p>
            <p>{" Address - " + props.loginUser.address}</p>
        </h2>
      </div>
     
      
    </div>
  );
};

export default MyProfile;
