import React from 'react'
import { Link } from "react-router-dom";
import './NavBar.scss';
import logo from '../../logoChinook2.svg';

export default function NavBar() {
    return (
        <div>
            <header className="header">
            <div className='header__logo'>
            <Link to='/' className="HeliLogo">
            <img src={logo} alt='Heli-Info Logo' className='header__logoImage'/>
            </Link>
            </div>
            
            <div className="header__rightSide">
            <Link to='/About'>
            <button className="header__About">About</button>
            </Link>
            <Link to='/Contact'>
            <button className="header__Contact">Contact</button>
            </Link>
            <Link to='/'>
            <button className="header__Home">Home</button>
            </Link>
            <Link to='/test'>
            <button className="header__TestStoryMode">TestStoryMode</button>
            </Link>
            </div>
            </header>
        </div>
    )
}
