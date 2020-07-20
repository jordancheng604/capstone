import React from 'react';
import {withRouter} from "react-router-dom";
import './OneHeli.scss';

function OneHeli({singleAircraft}) {
    console.log(singleAircraft)
    return (
        <div className='OneHeli'>
            <h5>One Heli is for displaying a single helicopter after a user clicked on one.</h5>
            <img src={singleAircraft.image}/>
        </div>

    )
}
export default withRouter(OneHeli);