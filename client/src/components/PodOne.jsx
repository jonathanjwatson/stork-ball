import React, { Component } from 'react';
import blackStorkCircle from '../images/black-stork-circle.png';


class PodOne extends Component {
    render() {
        return (
            <div>
                <div className="splash-image">
                <div class="splash-row">
                <div className="row-top">
                <h2>YOU ARE</h2>
                </div>
                <div>
                <h1>CORDIALLY INVITED</h1>
                </div>
                <div>
                <h3>TO THE FIRST ANNUAL STORK BALL</h3>
                </div>
                <img src={blackStorkCircle} />
                </div>
                
                </div>
            </div>
        );
    }
}

export default PodOne;