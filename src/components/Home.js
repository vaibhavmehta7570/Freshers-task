import React, { Component } from "react";
import Cards from "./Cards";
import "../assets/styles/Home.css";
import { getPosts } from "../redux";
import { connect } from "react-redux";
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // posts: [],
            isLoaded: false
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(data => data.json())
            .then(data => {
                console.log(data);
                this.setState({
                    isLoaded: true,
                })
                this.props.getPosts(data);
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
        var allPosts = this.props.posts.map(post => {
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
const mapStateToProps = (state) => {
    return {
        posts: state.post,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: (data) => dispatch(getPosts(data))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);