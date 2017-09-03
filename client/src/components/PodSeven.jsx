import React, { Component } from 'react';
import axios from 'axios';



class PodSeven extends Component {
	constructor() {
        super();
        this.state = {
            user: {
				fullName: '',
				email: '',
				phone: '',
				dinnerChoice: 'Chicken',
				guest: {
					guestFullName: null,
					guestDinnerChoice: 'Chicken'
				}
			},
			addGuest: false,
			submittedForm: false
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
	_handleGuestChange = (e) => {
		const attributeName = e.target.name;
		const attributeValue = e.target.value;
		const user = {...this.state.user};
		user.guest[attributeName] = attributeValue;
		this.setState({ user });
		console.log(this.state.user.fullName)
	}
	_toggleGuest = (e) => {
		e.preventDefault();
		const addGuest = !this.state.addGuest;
		this.setState({ addGuest })
	}
	_handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state.user);
		const payload = this.state.user;
		axios.post(`/api/user/create`, payload)
		.then((res) => {
			console.log("success")
			const submittedForm = !submittedForm
			this.setState({submittedForm})
		})
		.then((res) => {
			axios.post(`/sayHello`, payload)
			.then((res) => {
				console.log("Thanks for registering!");
			}).catch(err => console.log(err));
		})
	}
	
    render() {

		if (this.state.submittedForm) {
			return (
				<div className="pod-seven-splash-image">
					<h4>Thank you for submitting your response! We'll be in touch shortly.</h4>
				</div>
			)
		} else {


        return (
			<div>
				<div className="pod-seven-splash-image">
					<div className="text-area-three">
						<h1>RSVP</h1>
						<p>We hope you can join us for this special evening. If so, please tell us a few details about yourself and your guest (if you choose to bring one), and we'll take care of all the details. Childcare will be provided.</p>
					</div>
					<div className="RSVP">
					
						<div className="RSVP-One">
							
							<form action="">
							<h4>TELL US ABOUT YOURSELF</h4>
							<p>Required</p>
							<br />
								<label htmlFor="fullName">Full Name</label>
								<br />
								<input 
									type="text" 
									onChange={this._handleChange}
									value={this.state.user.fullName}
									name="fullName"
									placeholder="Full Name"
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
								<label htmlFor="phone">Phone Number</label>
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
								<button className="RSVP-secondary-button" onClick={this._toggleGuest}>Bring A Date</button>
								{ this.state.addGuest ? null : <div><button onClick={this._handleSubmit} className="RSVP-primary-button">Submit Your Information</button></div> }
								{ this.state.addGuest ? 
								<div>
									<h4>TELL US ABOUT YOUR GUEST</h4>
									<br />
										<label htmlFor="guestFullName">Guest Name</label>
										<br />
										<input 
											type="text"
											onChange={this._handleGuestChange}
											value={this.state.user.guest.guestFullName}
											name="guestFullName"
											placeholder="Guest Name"
											 />
										<br />
										<label htmlFor="guestDinnerChoice">Guest Dinner Choice</label>
										<br />
										<select 
											name="guestDinnerChoice"
											value={this.state.user.guest.guestDinnerChoice}
											onChange={this._handleGuestChange}
										>
											<option value="Chicken">Chicken</option>
											<option value="Beef">Beef</option>
											<option value="Vegetarian">Vegetarian</option>
										</select>
										<br />
										<button className="RSVP-primary-button" onClick={this._handleSubmit}>Submit Both</button>
								</div> : null}
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
    }
}

export default PodSeven;