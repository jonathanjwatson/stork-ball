import React, { Component } from 'react';
import PodSevenGuest from './PodSevenGuest';



class PodSeven extends Component {
	constructor() {
        super();
        this.state = {
            user: {
				fullName: '',
				email: '',
				phone: '',
				dinnerChoice: 'Chicken'
			},
			addGuest: false
        }
	}
	_handleChange = (e) => {
		const attributeName = e.target.name;
		const attributeValue = e.target.value;
		const user = {...this.state.user};
		user[attributeName] = attributeValue;
		this.setState({ user });
		console.log(this.state.user.fullName)
		
	}
	_toggleGuest = (e) => {
		const addGuest = !this.state.addGuest;
		this.setState({ addGuest })
	}
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
								<label htmlFor="fullName">Full Name</label>
								<br />
								<input 
									type="text" 
									onChange={this._handleChange}
									value={this.state.user.fullName}
									name="fullName"
									placeholder="Name"  
									required
								/>
								<br />
								<label htmlFor="email">Email</label>
								<br />
								<input 
									type="text" 
									onChange={this._handleChange}
									value={this.state.user.email}
									name="email"
									placeholder="Email Address"  
									required
								/>
								<br />
								<label htmlFor="phone">Email</label>
								<br />
								<input 
									type="text" 
									onChange={this._handleChange}
									value={this.state.user.phone}
									name="phone"
									placeholder="Phone Number"  
									required
								/>
								<br />
								<label htmlFor="dinnerChoice">Dinner Preference</label>
								<br />
								<select 
									name="dinnerChoice"
									value={this.state.user.dinnerChoice}
									onChange={this._handleChange}
								>
									<option value="Chicken">Chicken</option>
									<option value="Beef">Beef</option>
									<option value="Vegetarian">Vegetarian</option>
								</select>
								<br />
								<button onClick={this._toggleGuest}>Bring A Guest</button>
								{ this.state.addGuest ? null : <div><button>Submit Your Information</button></div> }
								{ this.state.addGuest ? <PodSevenGuest />: null}
							</form>
						</div>
					</div>
				</div>
			</div>
        );
    }
}

export default PodSeven;