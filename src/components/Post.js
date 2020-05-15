import React, { Component } from "react";
import PostCard from "./PostCard";
import { getPostDetails, getComments } from "../redux";
import { connect } from "react-redux";
import "../assets/styles/Home.css";
class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            username: "",
            error: false,
        }
    }
    componentDidMount() {
        Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`),
            fetch(`https://jsonplaceholder.typicode.com/comments`)
        ])
            .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
            .then(([data1, data2]) => {

                this.props.getPostDetails(data1);
                this.props.getComments(data2);

                return fetch(`https://jsonplaceholder.typicode.com/users/${this.props.postDetails.userId}`)
            }).then(function (response) {
                // Get a JSON object from the response
                return response.json();
            }).then(function (data) {
                this.setState({
                    username: data.name,
                    isLoaded: true
                })
            }.bind(this))
            .catch(function (error) {
                console.log(error);
                this.setState({
                    error: true
                })
            }.bind(this))
        // Promise.all([
        //     fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`),
        //     fetch(`https://jsonplaceholder.typicode.com/comments`)
        // ])
        //     .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
        //     .then(([data1, data2]) =>
        //         this.setState({
        //             postDetails: data1,
        //             comments: data2,

        //         }, () => {
        //             fetch(`https://jsonplaceholde.typicode.com/users/${this.state.postDetails.userId}`)
        //                 .then(res => res.json())
        //                 .then(json => {
        //                     this.setState({
        //                         username: json.name,
        //                         isLoaded: true,
        //                     })
        //                 })
        //                 .catch(err => {
        //                     console.log(err);
        //                     this.setState({
        //                         error: true
        //                     })
        //                 })
        //         }))
        //     .catch(err => {
        //         console.log(err)
        //         this.setState({
        //             error: true
        //         })
        //     })
    }
    // getusername() {
    //     fetch(`https://jsonplaceholder.typicode.com/users/${this.props.postDetails.userId}`)
    //         .then(res => res.json())
    //         .then(json => {
    //             this.setState({
    //                 username: json.name,
    //             })
    //         })
    //         .catch(err => {
    //             console.error(err)
    //             this.setState({
    //                 error: true
    //             })
    //         });

    // }
    render() {

        var { isLoaded, username, error } = this.state;
        var { postDetails, comments } = this.props;
        if (!isLoaded && error) {
            return <div> Something went wrong</div>
        }
        else if (!isLoaded) {
            return <div> Loading...</div>;
        }
        else {

            return (
                <div className="all-posts" >
                    <PostCard
                        username={username}
                        postTitle={postDetails.title}
                        postBody={postDetails.body}
                        comments={comments}
                    />
                </div>
            );
        }
    }
}
const mapStateToProps = (state) => {
    return {
        postDetails: state.postDetail,
        comments: state.comment
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getPostDetails: (data1) => dispatch(getPostDetails(data1)),
        getComments: (data2) => dispatch(getComments(data2))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Post);