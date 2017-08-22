import React, { Component } from 'react';
import kirkCameron from '../images/KirkCameron.png';
import martGreen from '../images/MartGreen.png';
import jamesDobson from '../images/JamesDobson.png';
import benhamBrothers from '../images/BenhamBrothers.png';
import joeBaker from '../images/JoeBaker.png';
import shariRigby from '../images/ShariRigby.png';
import bruceWilkinson from '../images/BruceWilkinson.png';
import blueStorkCircle from '../images/Blue-Stork-Circle.png';


class PodFive extends Component {
    render() {
        return (
            <div>
                
                <div className="pod-five-splash-image">  
                <div className="speaker-header">
                <h1>Speakers and Honored Guests</h1>
                </div>
                
                
                <div className="speaker-row">
                        <img className="pod-five-splash-image-bio" src={kirkCameron} alt="Kirk Cameron"/>
                        <img className="pod-five-splash-image-bio" src={martGreen} alt="Mart Green"/>
                </div>
                <div className="speaker-row">
                        <img className="pod-five-splash-image-bio" src={jamesDobson} alt="James Dobson"/>
                        <img className="pod-five-splash-image-bio" src={benhamBrothers} alt="Benham Brothers"/>
                </div>
                <div className="speaker-row">
                        <img className="pod-five-splash-image-bio" src={joeBaker} alt="Joe Baker"/>
                        <img className="pod-five-splash-image-bio" src={shariRigby} alt="Shari Rigby"/>
                </div>
                <div className="speaker-row">
                        <img className="pod-five-splash-image-bio" src={bruceWilkinson} alt="Bruce Wilkinson"/>
                </div>
                <img className="pod-five-splash-image-bottom" src={blueStorkCircle} alt="blue stork circle icon"/>
                </div>
            </div>
        );
    }
}

export default PodFive;