import React, { Component } from 'react';

class PodSevenGuest extends Component {
    render() {
        return (
            <div>
                <span>TELL US ABOUT YOUR GUEST</span>
							<br />
							<span>Optional</span>
							<br />
								<input type="text" placeholder="First Name" />
								<br />
								<input type="email" placeholder="Email Address" />
								<br />
								<input type="phone" placeholder="Phone Number" />
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
                                <button>Submit Your Information</button>
            </div>
        );
    }
}

export default PodSevenGuest;