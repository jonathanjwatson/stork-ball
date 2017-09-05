import React, { Component } from 'react';
import IndividualGuest from './IndividualGuest';

class IndividualUser extends Component {

    
    render() {
        // console.log(this.props);
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
                <form >
                    <div>
                        <div className="label">
                            <label htmlFor="notes">User Notes</label>
                        </div>
                        <div>
                        <textarea
                            className="input" 
                            rows="10" 
                            cols="100"
                            onChange={(e) => this.props._handleChange(e, this.props.index)}
                            value={this.props.notes}
                            name="notes"
                            placeholder="Notes"
                        >
                        </textarea>
                        </div>
                    </div>
                    <div >
                        <button>Save</button>
                    </div>
                </form>
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