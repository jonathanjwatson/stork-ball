import React, { Component } from 'react';

class IndividualGuest extends Component {
    render() {
        return (
            <div>
                {this.props.guest.guestFullName !==null ? 
                <div>
                    <p><strong>Guest Name: {this.props.guest.guestFullName}</strong></p>
                    <p>Guest Dinner Selection: {this.props.guest.guestDinnerChoice}</p>
                </div>
                : null }
            </div>
        );
    }
}

export default IndividualGuest;