import React, { Component } from 'react';
import IndividualGuest from './IndividualGuest';

class IndividualUser extends Component {
    
    render() {
        console.log(this.props);
        return (
            <div className="individualUser">
            <div className="attendee">
                <h3>Attendee: {this.props.fullName}</h3>
                <p>Email: {this.props.email}</p>
                <p>Phone: {this.props.phone}</p>
                <p>Dinner Selection: {this.props.dinnerChoice}</p>
                <IndividualGuest guest={this.props.guest} />
                <p>Registered On: {this.props.registeredOn}</p>
            </div>
            <div className="notes">
                <div>
                <textarea class="input" rows="10" cols="100">Some text here</textarea>
            </div>
            <div >
            <button>Save</button>
            </div>
            </div>
            </div>
        );
    }
}

IndividualUser.defaultProps = {
   guest: {

   }
}

export default IndividualUser;  