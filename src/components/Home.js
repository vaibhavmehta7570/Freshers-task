import React, { Component } from "react";
import Cards from "./Cards";
import "../assets/styles/Home.css";
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            isLoaded: false
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    posts: json
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
        var { isLoaded, posts, error } = this.state;
        var allPosts = posts.map(post => {
            return (
                <div className="cards mb-3">
                    <Cards
                        key={post.id}
                        title={post.title}
                        id={post.id}
                        body={post.body}
                        user={post.userId}
                    />
                </div>
            );
        })
        if (!isLoaded && error) {
            return <div> Something went wrong...</div>
        }
        else if (!isLoaded) {
            return <div> Loading...</div>;
        }
        else {
            return (
                <div className="all-posts">
                    {allPosts}
                </div>
            );
        }
    }
}
export default Home;