import React, { Component } from "react";
import IndividualUser from "./IndividualUser";
import "../assets/styles/UserDetails.css";
import { fetchUserInfo } from '../redux/async-api/userInfo.js'
import { connect } from "react-redux";
class UserDetails extends Component {
    componentDidMount() {
        const userId = this.props.match.params.id;
        this.props.userInfo(userId)

    }
    render() {
        const { loading, userDetails, error } = this.props;

        if (loading === true) {
            return (<div> Loading...</div>);
        }
        else if (error !== "") {
            return <div> {error.message}</div>;
        }
        else {
            return (
                <div className="single-user">
                    <div className="users mb-3">
                        {userDetails.address ? <IndividualUser
                            key={userDetails.id}
                            id={userDetails.id}
                            name={userDetails.name}
                            username={userDetails.username}
                            email={userDetails.email}
                            address={userDetails.address.city}
                            company={userDetails.company.name}
                            phone={userDetails.phone}
                            website={userDetails.website}
                        /> : null}
                    </div>
                </div>
            );
        }
    }
}
const mapStateToProps = (state) => {
    return {
        loading: state.userInfoReducer.loading,
        userDetails: state.userInfoReducer.userDetails,
        error: state.userInfoReducer.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userInfo: (userId) => dispatch(fetchUserInfo(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails)