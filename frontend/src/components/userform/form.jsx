import React from 'react';
import "./formstyle.css"


function form  () {
    return (
        <section className="section">
        <h1>Kitchen Name</h1>
        <p>Confirm Details</p>
        <div className="Details">

            <div className="streetname">
                <label>Street name</label><br></br>
                <input/>
            </div>
            <div className="unit">
                <label for="lname">Unit</label><br></br>
                <input/>
            </div>
            <div className="code">
                <label for="lname">Postal Code</label><br></br>
                <input/>
            </div>
            <div className="city">
                <label for="lname">City</label><br></br>
                <input/>
            </div>
            <div className="province">
                <label for="lname">Province</label><br></br>
                <input/>
            </div>
        </div>
        </section>
    )
}
export default form;