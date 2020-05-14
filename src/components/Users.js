import React, { Component } from "react";
import UserCard from "./UserCard";
import "../assets/styles/Users.css";
import { getUsers } from "../redux";
import { connect } from "react-redux";

class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // users: [],
            isLoaded: false,
            error: false
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(data => data.json())
            .then(data => {
                this.setState({
                    isLoaded: true,
                })
                this.props.getUsers(data);
            })
            .catch(err => {
                console.error(err);
                this.setState({
                    error: true
                })
            })
    }
    render() {
        var { isLoaded, error } = this.state;
        var allUsers = this.props.users.map(user => {
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
const mapStateToProps = (state) => {
    return {
        users: state.user,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: (data) => dispatch(getUsers(data))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);