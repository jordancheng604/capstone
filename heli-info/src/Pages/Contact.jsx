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

            <form>
                <input>EMAIL</input>
                <input>NAME</input>
                <textarea>Message</textarea>
                <button>SUBMIT</button>
            </form>

            
        </div>
    )
}
