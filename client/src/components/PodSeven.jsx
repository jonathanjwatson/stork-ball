import React, { Component } from 'react';



class PodSeven extends Component {
    render() {
        return (
            
<div>
	<div className="pod-seven-splash-image">
		<div className="text-area-three">
			<h1>RSVP</h1>
			<p>We hope you can join us for this special evening. If so, please tell us a few details about yourself and your guest (if you choose to bring one), and we'll take care of all the details.</p>
		</div>
		<div className="RSVP">
        
			<div className="RSVP-One">
				
				<form action="">
				<span>TELL US ABOUT YOURSELF</span>
				<br />
				<span>Required</span>
				<br />
					<input type="text" placeholder="First Name"  />
					<br />
					<input type="email" placeholder="Email Address"  />
					<br />
					<input type="phone" placeholder="Phone Number (optional)" />
					<br />
					<input type="radio" name="meal" value="chicken" checked /> Chicken
					<br />
					<input type="radio" name="meal" value="beef"  /> Beef
					<br />
					<input type="radio" name="meal" value="vegetarian"  /> Vegetarian
					<br />
                </form>
			</div>
			<div className="RSVP-Padding">
			</div>
			<div className="RSVP-Two">
				
	
                <form action="">
				<span>TELL US ABOUT YOUR GUEST</span>
				<br />
				<span>Optional</span>
				<br />
					<input type="text" placeholder="First Name" />
					<br />
					<input type="email" placeholder="Email Address" />
					<br />
					<input type="phone" placeholder="Phone Number (optional)" />
					<br />
					<input type="radio" name="meal" value="chicken" checked /> Chicken
					<br />
					<input type="radio" name="meal" value="beef"  /> Beef
					<br />
					<input type="radio" name="meal" value="vegetarian"  /> Vegetarian
					<br />
                </form>
			</div>
            <div className="RSVP-Submit">
                <button>Submit Your Information</button>
            </div>
		</div>
	</div>
</div>
        );
    }
}

export default PodSeven;