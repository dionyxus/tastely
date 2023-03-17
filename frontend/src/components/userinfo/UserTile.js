import React from 'react'
//import { useState } from 'react';
import UserPage from './UserPage.js'
import img from './IMG_0146.JPG'
export function UserTile({ name, plan, contact }) {
    //const [inputText, setInputText] = useState("");
    //console.log(UserPage.name);

    return (

        <div className='container' >
            <div className="picture"><img src={img} alt="" /></div>
            <div className='box box1'>


                <main className=''>


                    <label className='name'><UserPage name={name} /></label>
                    <br />
                    <label className='plan'> Plan:{plan}</label>
                    <br />
                    <label className='contact'>Contact:{contact}</label>

                </main>
            </div>
        </div>




    );
}

export default UserTile