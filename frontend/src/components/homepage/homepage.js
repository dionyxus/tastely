import { React } from 'react';
import Header from './header';
import AllKitchens from './allkitchens';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import './homepage.css';
import '../ownerpage/ownerpage.css'



  // const { id } = useParams();

  

const Homepage = (props) => {

  

  

  

  return (
    <div className="homepage">
   <Header />

      
      <div class="page-content">
      <h2>EXPOLORE ALL REGISTERED KITCHENS</h2>
      <AllKitchens />
      </div>
    </div>
  );
};

export default Homepage;
