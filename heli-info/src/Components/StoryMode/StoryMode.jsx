import React from 'react'
import NavBar from '../NavBar/NavBar';

export default function StoryMode() {
    return (
        <div>
            <NavBar/>
            <h5>StoryMode page</h5>
{/* We'll base it off the Apache for now since there's more modeling data for it */}
            <h3>Helicopter Model No and Name: AH-64 Apache</h3>
            <h3>Manufacturer: Boeing</h3>
            <p>Possible a slogan or nickname: The flying Takn.</p>


            <div className="section__right">
                <h3>It can fly upside down.</h3>
            </div>

            <div className="background__container">
            



            </div>


        </div>
    )
}
