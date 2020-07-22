import React from 'react';
import NavBar from '../NavBar/NavBar';
import './StoryMode.scss';

import {OBJModel} from 'react-3d-viewer';

class StoryMode extends React.Component{


    render(){
    return (
        <div className="StoryMode">
            <NavBar/>
            <h5>StoryMode page</h5>
{/* We'll base it off the Apache for now since there's more modeling data for it */}
           <div className="HeliModel">
               <OBJModel src="./Assets/model_obj/model.obj" />
           </div>
            <h3 className="section__left">L-Helicopter Model No and Name: AH-64 Apache</h3>
            <h3 className="section__left">L-Manufacturer: Boeing</h3>
            <p className="section__left">L-Possible a slogan or nickname: The flying Tank.</p>


            <div className="section__right">
                <h3>It can fly upside down.</h3>
            </div>

            <div className="background__container">
            <div className="parallaxGround">For ground layer</div>

            <div className="section__right">
                <h3>More Apache info-RightSide</h3>
                <p>And some more</p>
            </div>

            <div className="section__left">
                <h3>L-LeftSide</h3>
                <p>L-left-side</p>
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
}
export default StoryMode;