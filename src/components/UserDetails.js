import React, { Component } from "react";
import IndividualUser from "./IndividualUser";
import "../assets/styles/UserDetails.css";
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: [],
            isLoaded: false,
            error: false
        }
    }
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    userInfo: json
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
        var { isLoaded, userInfo, error } = this.state;
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
                            key={userInfo.id}
                            id={userInfo.id}
                            name={userInfo.name}
                            username={userInfo.username}
                            email={userInfo.email}
                            address={userInfo.address.city}
                            company={userInfo.company.name}
                            phone={userInfo.phone}
                            website={userInfo.website}
                        />
                    </div>
                </div>
            );
        }
    }
}
export default Home;