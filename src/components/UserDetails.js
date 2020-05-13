import React, { Component } from "react";
import IndividualUser from "./IndividualUser";
import "../assets/styles/UserDetails.css";
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: [],
            isLoaded: false
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
            });
    }
    render() {
        var { isLoaded, userInfo } = this.state;
        if (!isLoaded) {
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