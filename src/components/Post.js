import React, { Component } from "react";
import PostCard from "./PostCard";
import "../assets/styles/Home.css";
class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postDetails: [],
            isLoaded: false,
            comments: [],
            username: ""
        }
    }
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    postDetails: json,
                })
                this.fetchUserName();
            });
        fetch(`https://jsonplaceholder.typicode.com/comments`)
            .then(res => res.json())
            .then(json => {
                var allComments = json;

                var comments = allComments.filter(comment => comment.postId === Number(this.props.match.params.id))
                this.setState({
                    isLoaded: true,
                    comments: comments,
                })
            })
    }
    fetchUserName() {
        fetch(`https://jsonplaceholder.typicode.com/users/${this.state.postDetails.userId}`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    username: json.name
                })
            })
    }
    render() {
        var { isLoaded, postDetails, comments, username } = this.state;
        if (!isLoaded) {
            return <div> Loading...</div>;
        }
        else {
            return (
                <div className="all-posts">
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
export default Post;