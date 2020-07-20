import React from 'react';
import {withRouter} from "react-router-dom";
import './OneHeli.scss';

function OneHeli({singleAircraft}) {
    console.log(singleAircraft)
    return (
        <div className='OneHeli'>
            <h5>One Heli is for displaying a single helicopter after a user clicked on one.</h5>
            <img src={singleAircraft.image}/>
            <h5>Manufacture: {singleAircraft.manufacturer_code}</h5>
            <div>Model number: {singleAircraft.model_no}</div>
            <div>Model name: {singleAircraft.model_name}</div>
            <p>{singleAircraft.overview}</p>
        </div>

    )
}
export default withRouter(OneHeli);