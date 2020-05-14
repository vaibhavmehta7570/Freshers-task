import React, { Component } from "react";
import UserCard from "./UserCard";
import "../assets/styles/Users.css";
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            isLoaded: false,
            error: false
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    users: json
                })
            })
            .catch(err => {
                console.error(err);
                this.setState({
                    error: true
                })
            })
    }
    render() {
        var { isLoaded, users, error } = this.state;
        var allUsers = users.map(user => {
            return (
                <div className="users mb-3">
                    <UserCard
                        key={user.id}
                        name={user.name}
                        user={user}
                        id={user.id}
                    />
                </div>
            );
        })
        if (!isLoaded && error) {
            return (<div> Something went wrong </div>);
        }
        else if (!isLoaded) {
            return <div> Loading...</div>;
        }
        else {
            return (
                <div className="all-users">
                    {allUsers}
                </div>
            );
        }
    }
}
export default Home;