import React, { Component } from 'react';
import IndividualGuest from './IndividualGuest';

class IndividualUser extends Component {
    
    render() {
        console.log(this.props);
        return (
            <div>
                <h3>Attendee: {this.props.fullName}</h3>
                <p>Email: {this.props.email}</p>
                <p>Phone: {this.props.phone}</p>
                <p>Dinner Selection: {this.props.dinnerChoice}</p>
                <p>Guest Name: {this.props.guest.guestFullName}</p>
                <p>Guest Dinner Selection: {this.props.guest.guestDinnerChoice}</p>
            </div>
        );
    }
}

IndividualUser.defaultProps = {
   guest: {

   }
}

export default IndividualUser;  