import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import '../styles/AboutPage.scss';

export default function About() {
    return (
        <div >
            <NavBar/>
            <div className='about'>
            <h1>About Us</h1>
            <div className='about__us'>
            <p>
                The original intent of this is to help share and spread information about Aviation Helicopters and saying Thank-You to those that serve and have served.</p>

                <p> Thank you for the sacrifices that you and your family have made. </p>

                <p>We believe that there is not enough appreciation for those that serve and have served; and therefore, encourage people to... 
                    ...look into volunteering or donations. If you're thinking about helping out somewhere, please consider our veterans.</p>

                <p>This project started with Canadian Military Helicopters, and we would like to slowly grow and add more Military Aircraft and Equipment to the website. It is dependant on a lot of factors so please bear with us if adding new content is slow.</p>

                <p>Also, we are a small team, so please be patient with us if you do not see the aircraft you are looking for.</p>

                <p>Our goal is to eventually have all NATO military equipment listed on our website.</p>

                <p>There have been unforeseen difficulties in collecting appropriate information and content to not break any copyright laws.</p>

                <p>If you would like to see your favorite Aircraft listed on our website. Feel free to use the Contact page and let us know. And if you have a favorite picture, that you own, and would like have it on our website please kindly send it to us via email.</p>
            </div>
            </div>
        </div>
    )
}
