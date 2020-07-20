import React from 'react'
import NavBar from '../Components/NavBar/NavBar';

export default function Contact() {
    return (
        <div>
            <NavBar/>
            <h1>Contact PAGE.</h1>
            <p>
                Contact us at:
                heli.info2020@gmail.com
            
            </p>
            <p>
                EMAIL subbmission contact form.
            </p>

            {/* <form className="contact__form" onSubmit={""}>
                <input name="emailInput" type="email" className="contact__emailInput">EMAIL</input>
                <input name="nameInput" type="text" className="contact__nameInput">NAME</input>
                <textarea type="text" className="contact__messageInput">Message</textarea>
                <button>SUBMIT</button>
            </form> */}

            
        </div>
    )
}
