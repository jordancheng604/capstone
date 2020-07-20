import React, {Component} from 'react'
import NavBar from '../Components/NavBar/NavBar';
import { Link, Redirect, withRouter } from "react-router-dom";

export default class Contact extends Component {
    constructor(){
        super();
        this.state = { 
            contactPage: '', 
            name: 'Name', 
            email: 'email@example.com'
        };
        // this.handleChange=this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

    }

    render(){
    return (
        <div>
            <NavBar/>
            <form className="contact__form">

                <input className="contact__nameInput" placeholder="Name"></input>
                <input className="contact__emailInput" placeholder="E-mail"></input>
                <textarea className="contact__messageInput" onChange={this.handleChange} placeholder="Message"></textarea>
                <button className="contact__submitButton" onClick={this.handleSubmit}>SUBMIT</button>
            </form>
            {/* <h1>Contact PAGE.</h1>
            <p>
                Contact us at:
                heli.info2020@gmail.com
            
            </p>
            <p>
                EMAIL subbmission contact form.
            </p> */}

            {/* <form className="contact__form" >
                <input name="emailInput" type="email" className="contact__emailInput">EMAIL</input>
                <input name="nameInput" type="text" className="contact__nameInput">NAME</input>
                <textarea name="messageInput" type="text" className="contact__messageInput">Message</textarea>
                <button className="contact__button">SUBMIT</button>
            </form> */}

            
        </div>
    )
}
}
