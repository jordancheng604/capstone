import React from 'react';
import {withRouter} from "react-router-dom";
import './OneHeli.scss';

function OneHeli({singleAircraft}) {
    console.log(singleAircraft)
    return (
        <div className='OneHeli'>
            <img className='OneHeli__image' src={singleAircraft.image2} alt=""/>
            <h5 className='OneHeli__make'>Manufacture: {singleAircraft.manufacturer_code}</h5>
            <div className='OneHeli__modelNumber'>Model number: {singleAircraft.model_no}</div>
            <div className='OneHeli__modelName'>Model name: {singleAircraft.model_name}</div>
            <p className='OneHeli__overview'>{singleAircraft.overview}</p>
            <div className="OneHeli__length">{singleAircraft.length}</div>
            <div className="OneHeli__wingspan">{singleAircraft.wingspan}</div>
            <div className="OneHeli__height">{singleAircraft.height}</div>
            <div className="OneHeli__power">{singleAircraft.power}</div>
            <div className="OneHeli__maxSpeed">{singleAircraft.max_speed}</div>
            <div className="OneHeli__range">{singleAircraft.range}</div>
            <div className="OneHeli__crew">{singleAircraft.crew}</div>
        </div>

    )
}
export default withRouter(OneHeli);