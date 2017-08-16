import React, { Component } from 'react';
import IndividualGuest from './IndividualGuest';

class IndividualUser extends Component {
    render() {
        return (
            <div>
                <h3>Attendee: {this.props.fullName}</h3>
                <p>Email: {this.props.email}</p>
                <p>Phone: {this.props.phone}</p>
                <p>Dinner Selection: {this.props.dinnerChoice}</p>
                <IndividualGuest guest={this.props.guest}/>
            </div>
        );
    }
}

export default IndividualUser;