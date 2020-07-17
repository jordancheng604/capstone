import React from 'react';
import {withRouter} from "react-router-dom";
import './OneHeli.scss';

function OneHeli(singleAircraft) {
    console.log(singleAircraft)
    return (
        <div className='OneHeli'>
            <h7>One Heli is for displaying a single helicopter after a user clicked on one.</h7>
            <img src={singleAircraft}/>
        </div>

    )
}
export default withRouter(OneHeli);