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
								<input type="radio" name="meal" value="chicken" checked /> Chicken
								<br />
								<input type="radio" name="meal" value="beef"  /> Beef
								<br />
								<input type="radio" name="meal" value="vegetarian"  /> Vegetarian
								<br />
                                <button>Submit Your Information</button>
            </div>
        );
    }
}

export default PodSevenGuest;