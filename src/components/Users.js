import React, { Component } from "react";
import UserCard from "./UserCard";
import "../assets/styles/Users.css";
import { fetchUsers } from '../redux/async-api/users.js';
import { connect } from "react-redux";

class Users extends Component {
    componentDidMount() {
        this.props.usersList();
    }
    render() {
        const { loading, users, error } = this.props;
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
        return loading === true ? (
            <div>Loading...</div>
        ) : error !== '' ? (
            <div>{error.message}</div>
        ) : (
                    <div className="all-users">{allUsers}</div>
                );
    }
}
const mapStateToProps = (state) => {
    return {
        loading: state.usersReducer.loading,
        users: state.usersReducer.users,
        error: state.usersReducer.error,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        usersList: () => dispatch(fetchUsers()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);