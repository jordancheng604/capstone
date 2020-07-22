import React from 'react';
import NavBar from '../NavBar/NavBar';
import './StoryMode.scss';

function StoryMode() {
    return (
        <div>
            <NavBar/>
            <h5>StoryMode page</h5>
{/* We'll base it off the Apache for now since there's more modeling data for it */}
            <h3 className="secion__left">Helicopter Model No and Name: AH-64 Apache</h3>
            <h3 className="secion__left">Manufacturer: Boeing</h3>
            <p className="secion__left">Possible a slogan or nickname: The flying Tank.</p>


            <div className="section__right">
                <h3>It can fly upside down.</h3>
            </div>

            <div className="background__container">
            <div className="parallaxGround">For ground layer</div>

            <div className="section__right">
                <h3>More Apache info-RightSide</h3>
                <p>And some more</p>
            </div>

            <div className="secion__left">
                <h3>LeftSide</h3>
                <p>left-side</p>
            </div>

            <div className="section__right">
                <h3>stuf stuff</h3>
                <p>mor stuff</p>
            </div>

            <div className="parallaxClouds">Clouds layer</div>


            </div>

            <div>BluePrint section starts here.</div>

        </div>
    )
}
export default StoryMode;