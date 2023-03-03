import { React } from 'react';
import Header from './header';
import AllKitchens from './allkitchens';
import './homepage.css';

const Homepage = (props) => {
  return (
    <div className="homepage">
      <div>
        <h2>
          {'Hi ' +
            props.loginUser.name +
            ' Welcome - User Type - ' +
            props.loginUser.usertype +
            ''}
        </h2>
      </div>
      <Header />
      <AllKitchens />
    </div>
  );
};

export default Homepage;
