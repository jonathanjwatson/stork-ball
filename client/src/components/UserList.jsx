import React, { Component } from 'react';
import axios from 'axios';
import IndividualUser from './IndividualUser';

class UserList extends Component {
    constructor() {
        super();
        this.state = {
            users: [
            ]
        }
    }
    componentWillMount() {
        this._getUserData();
    }
    _getUserData = () => {
        axios.get(`/api/user/`)
        .then(res => {
            this.setState({users: res.data})
        })
    }
    _handleChange = (e, index) => {
        const attributeName = e.target.name;
        const attributeValue = e.target.value;
        const attributePosition = index;
        console.log(attributePosition)
        const user = {...this.state.users[attributePosition]};
        console.log(user)
        user[attributeName] = attributeValue;
        this.setState({ user })
    }
	_handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state.user);
		const payload = this.state.user;
		axios.put(`/api/user/notes`, payload)
		.then((res) => {
			console.log("success")
			const submittedForm = !submittedForm
			this.setState({submittedForm})
		})
	}
    render() {
        const users = this.state.users;
        // console.log(users);
        const userComponent = users.map((user, i) => {
            // console.log(user);
            return <IndividualUser
            {...user}
            _handleChange={this._handleChange}
            key={i}
            index={i}
            />;
        })
        return (
            <div className="row">
                <h1>Registered Users</h1>
                {userComponent}
            </div>
        );
    }
}

export default UserList;