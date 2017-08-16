import React, { Component } from 'react';

class PodSevenGuest extends Component {
    render() {
        return (
            <div>
                <h4>TELL US ABOUT YOUR GUEST</h4>
							<p>Optional</p>
							<br />
                                <label htmlFor="guestFullName">Guest Name</label>
                                <br />
								<input type="text" placeholder="First Name" />
								<br />
                                <label htmlFor="guestEmail">Guest Email</label>
                                <br />
								<input type="email" placeholder="Email Address" />
								<br />
                                <label htmlFor="guestPhone">Guest Phone Number</label>
                                <br />
								<input type="phone" placeholder="Phone Number" />
								<br />
                                <label htmlFor="guestDinnerChoice">Guest Dinner Choice</label>
                                <br />
								<select 
									name="dinnerChoice"
									// value={this.state.user.dinnerChoice}
									// onChange={this._handleChange}
								>
									<option value="Chicken">Chicken</option>
									<option value="Beef">Beef</option>
									<option value="Vegetarian">Vegetarian</option>
								</select>
								<br />
                                <button className="RSVP-primary-button">Submit Your Information</button>
            </div>
        );
    }
}

export default PodSevenGuest;