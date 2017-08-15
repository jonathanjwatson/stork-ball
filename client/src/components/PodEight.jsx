import React, { Component } from 'react';
import googleMap from '../images/Google-Map.png';
import footer from '../images/SaveTheStorks-Footer.png';



class PodEight extends Component {

    render() {
        return (
            <div>
                <div className="pod-eight-splash-image">
                <div className="text-area-three">
                <h1>LOCATION & HOTELS</h1>
                <p>Our guests are eligible for special pricing at these hotels near the museum</p>
                </div>
                <img className="map-image" src={googleMap} />
                <div>
                    <p>For further information please contact Morgan Melendez at <a href="mailto:Morgan.Melendez@SavetheStorks.com">Morgan.Melendez@SavetheStorks.com</a></p>
                </div>
                <div>
                    <img  src={footer} />
                </div>
            </div>
            
            </div>
        );
    }
}

export default PodEight;