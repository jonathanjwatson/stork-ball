import React, { Component } from 'react';
import blueStork from '../images/Blue-Stork-Circle.png';



class PodSix extends Component {
    render() {
        return (
            <div>
                <div className="pod-six-splash-image">
                <img className="pod-six-splash-image-top" src={blueStork} />
                <div className="text-area-three">
                <p>The day following the Stork Ball, we'll be walking down Constitution Avenue in unity, participating in the March for Life. Join us on the front lines as we hand out signs and experience the passion at the heart of the movement!</p>
                </div>
                </div>
            </div>
        );
    }
}

export default PodSix;