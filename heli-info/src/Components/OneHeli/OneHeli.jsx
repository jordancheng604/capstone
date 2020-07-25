import React from 'react';
import {withRouter} from "react-router-dom";
import './OneHeli.scss';

function OneHeli({singleAircraft}) {
    console.log(singleAircraft)
    return (
        <div className='OneHeli'>
            <img className='OneHeli__image' src={singleAircraft.image}/>
            <h5 className='OneHeli__make'>Manufacture: {singleAircraft.manufacturer_code}</h5>
            <div className='OneHeli__modelNumber'>Model number: {singleAircraft.model_no}</div>
            <div className='OneHeli__modelName'>Model name: {singleAircraft.model_name}</div>
            <p className='OneHeli__overview'>{singleAircraft.overview}</p>
        </div>

    )
}
export default withRouter(OneHeli);