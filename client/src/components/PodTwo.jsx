import React, { Component } from 'react';
import blackStork from '../images/black-stork-circle.png';


class PodTwo extends Component {
    render() {
        return (
            <div>
                <div className="pod-two-splash-image"> 
                <img className="pod-two-splash-image-top" src={blackStork} />
                <div className="text-area">
                <h4>We will be spending the evening of</h4>
                <h1>January 18, 2018</h1>
                <h4>on the top floor of the</h4>
                <h1>MUSEUM OF THE BIBLE</h1>
                <h4>Come with your best date and your best outfit, to eat, drink, and share the night with Save the Storks.</h4>    
                </div>       
                </div>
            </div>
        );
    }
}

export default PodTwo;