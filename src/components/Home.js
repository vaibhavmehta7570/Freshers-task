import React, { Component } from "react";
import Cards from "./Cards";
import "../assets/styles/Home.css";
import { connect } from "react-redux";
import { fetchPosts } from "../redux/async-api/posts.js";
class Home extends Component {
    componentDidMount() {
        this.props.postsList()
    }
    render() {
        const { loading, posts, error } = this.props
        console.log(posts)
        const allPosts = posts.map(post => {
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
        return (
            loading === true ? <div>Loading...</div> : (error !== '' ? <div>{error.message}</div> :
                <div className="all-posts">
                    {allPosts}
                </div>)
        );
    }
}
const mapStateToProps = (state) => {
    return {
        loading: state.postReducer.loading,
        posts: state.postReducer.posts,
        error: state.postReducer.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postsList: () => dispatch(fetchPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)