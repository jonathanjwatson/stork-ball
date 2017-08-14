import React, { Component } from 'react';
import downPoint from '../images/Down-Point.png';
import kirkCameron from '../images/KirkCameron.png';
import martGreen from '../images/MartGreen.png';
import jamesDobson from '../images/JamesDobson.png';
import benhamBrothers from '../images/BenhamBrothers.png';


class PodFive extends Component {
    render() {
        return (
            <div>
                
                <div className="pod-five-splash-image">  
                <img className="pod-five-splash-image-point" src={downPoint} />
                
                <div className="speaker-row">
                        <img className="pod-five-splash-image-bio" src={kirkCameron} />
                        <img className="pod-five-splash-image-bio" src={martGreen} />
                </div>
                <div className="speaker-row">
                        <img className="pod-five-splash-image-bio" src={jamesDobson} />
                        <img className="pod-five-splash-image-bio" src={benhamBrothers} />
                </div>
                </div>
            </div>
        );
    }
}

export default PodFive;