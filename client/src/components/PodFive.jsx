import React, { Component } from 'react';
import kirkCameron from '../images/KirkCameron.png';
import martGreen from '../images/MartGreen.png';
import jamesDobson from '../images/JamesDobson.png';
import benhamBrothers from '../images/BenhamBrothers.png';
import joeBaker from '../images/JoeBaker.png';
import shariRigby from '../images/ShariRigby.png';
import blueStorkCircle from '../images/Blue-Stork-Circle.png';


class PodFive extends Component {
    render() {
        return (
            <div>
                
                <div className="pod-five-splash-image">  
                
                
                <div className="speaker-row">
                        <img className="pod-five-splash-image-bio" src={kirkCameron} />
                        <img className="pod-five-splash-image-bio" src={martGreen} />
                </div>
                <div className="speaker-row">
                        <img className="pod-five-splash-image-bio" src={jamesDobson} />
                        <img className="pod-five-splash-image-bio" src={benhamBrothers} />
                </div>
                <div className="speaker-row">
                        <img className="pod-five-splash-image-bio" src={joeBaker} />
                        <img className="pod-five-splash-image-bio" src={shariRigby} />
                </div>
                <img className="pod-five-splash-image-bottom" src={blueStorkCircle} />
                </div>
            </div>
        );
    }
}

export default PodFive;