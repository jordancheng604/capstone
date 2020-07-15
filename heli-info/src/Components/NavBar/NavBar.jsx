import React from 'react'
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <Header>
            <div className='header__logo'>
            <Link to='/' className="HeliLogo">
            <img src={props.logo} alt='Heli-Info Logo'/>
            </Link>
            </div>
            
            <div className="header__rightSide">
            <Link to='/About'>
            <button className="header__About">About</button>
            </Link>
            <Link to='/Contact'>
            <button className="header__About">Contact</button>
            </Link>
            <Link to='/Home'>
            <button className="header__About">Home</button>
            </Link>
            </div>
            </Header>
        </div>
    )
}
