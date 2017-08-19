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
                <p>Our guests are eligible for special pricing at these hotels near the museum:</p>
                </div>
                <div>
                    <div className="hotel-button">
                    <p>The Mayflower</p>
                    <a href="https://aws.passkey.com/event/49361100/owner/1261/home"><button className="RSVP-primary-button">
                    Reserve Now</button></a>
                    </div>
                    <div className="hotel-button">
                    <p>Kimpton Hotel</p>
                    <a href="https://gc.synxis.com/rez.aspx?Hotel=26732&Chain=10179&arrive=1/18/2018&depart=1/20/2018&adult=1&child=0&group=11420108031"><button className="RSVP-primary-button">Reserve Now</button></a>
                    </div>
                </div>
                <img className="map-image" src={googleMap} alt="google map"/>
                <div>
                    <p className="email-notice">For further information please contact Morgan Melendez at <a href="mailto:Morgan.Melendez@SavetheStorks.com">Morgan.Melendez@SavetheStorks.com</a></p>
                </div>
                <div>
                    <img  src={footer} alt="stork footer logo" />
                </div>
            </div>
            
            </div>
        );
    }
}

export default PodEight;