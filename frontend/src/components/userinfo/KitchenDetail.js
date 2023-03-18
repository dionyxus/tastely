import React from 'react'
import bgImage from './IMG_0914.PNG'
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h3 className='profile'>Profile</h3>
                <h5 className='demoLogin'>Demo Login</h5>
            </header>
            <div className="picture"><img src={bgImage} alt="" /></div>
            <form id="personForm" method="post">
                <label className="owner" >Owner Name:</label>
                <input className="ownerName" type="text" id="owner" name="owner" required />
                <label className="restaurant">Restaurant Name:</label>
                <input className="restaurantName" type="text" id="restaurant" name="restaurant" required />
                <label className="personal">Personal Number:</label>
                <input className="personalNumber" type="text" id="number" name="number" required />
                <label className="contact">Contact Number:</label>
                <input className="contactNumber" type="text" id="name" name="name" required />

                <label className="add">Address:</label>
                <input className="address" type="text" id="address" name="address" required />
                <button type="submit">Save</button>
            </form>

        </div>
    );
}
export default App;