import React, { Component } from 'react';
import BlueStork from '../images/Blue-Stork.png';


class PodFour extends Component {
    render() {
        return (
            <div>
                <div className="pod-four-splash-image">  
                    <div className="text-area-three"> 
                <p>This will be the first event hosted on the top floor of the museum, overlooking all of Washington D.C.</p>
                <img src={BlueStork} />
                <p>After a tour of the new facility, there will be drinks in the glass-enclosed Garden of Eden.</p>
                <img src={BlueStork} />
                <p>Dinner will be served as we share everything God is doing with Save the Storks.</p>
                <img src={BlueStork} />
                <p>The night will be filled with incredible views, delicious food, a raffle, and several incredible people who will be sharing their stories and passion for pro-life.</p> 
                </div>
                </div>
            </div>
        );
    }
}

export default PodFour;