import React, { Component } from "react";
import IndividualUser from "./IndividualUser";
import "../assets/styles/UserDetails.css";
import { fetchUserDetails } from "../redux";
import { connect } from "react-redux";
class UserDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // userInfo: [],
            isLoaded: false,
            error: false
        }
    }
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
            .then(data => data.json())
            .then(data => {
                this.props.fetchUserDetails(data);
                this.setState({
                    isLoaded: true,
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
        var { isLoaded, error } = this.state;
        if (!isLoaded && error) {
            return (<div> Something went wrong</div>);
        }
        else if (!isLoaded) {
            return <div> Loading...</div>;
        }
        else {
            return (
                <div className="single-user">
                    <div className="users mb-3">
                        <IndividualUser
                            key={this.props.userInfo.id}
                            id={this.props.userInfo.id}
                            name={this.props.userInfo.name}
                            username={this.props.userInfo.username}
                            email={this.props.userInfo.email}
                            address={this.props.userInfo.address.city}
                            company={this.props.userInfo.company.name}
                            phone={this.props.userInfo.phone}
                            website={this.props.userInfo.website}
                        />
                    </div>
                </div>
            );
        }
    }
}
const mapStateToProps = (state) => {
    return {
        userInfo: state.userInformation,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserDetails: (data) => dispatch(fetchUserDetails(data))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);