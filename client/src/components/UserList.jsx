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
        const userId = this.props.match.params.userId
        axios.get(`/api/user/`)
        .then(res => {
            this.setState({users: res.data})
        })
    }
    render() {
        const users = this.state.users;
        console.log(users);
        const userComponent = users.map((user, i) => {
            console.log(user);
            return <IndividualUser
            {...user}
            key={i}
            />;
        })
        return (
            <div>
                {userComponent}
            </div>
        );
    }
}

export default UserList;