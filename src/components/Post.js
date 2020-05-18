import React, { Component } from 'react'
import PostCard from "./PostCard";
import '../assets/styles/usersPost.css'

import { connect } from 'react-redux'

import { fetchUserPost, fetchUserComment } from '../redux/async-api/usersPost.js'


class Post extends Component {

    componentDidMount() {

        this.fetchAPIs()

    }

    fetchAPIs = async () => {

        const { fetchUserPost, fetchUserComment } = this.props

        const { id } = this.props.match.params;

        await fetchUserPost(id)
        fetchUserComment(id)

    }

    render() {

        const { loading, userPost, error, usersComment, commentLoading, commentErr } = this.props
        return (
            (loading === true || commentLoading === true ? <div>Loading...</div> : (error !== '' || commentErr !== "" ? <div>Something went wrong</div> :
                <div className="all-posts" key={userPost.userId}>
                    <PostCard
                        key={userPost.userId}
                        userId={userPost.userId}
                        postTitle={userPost.title}
                        postBody={userPost.body}
                        comments={usersComment}
                    />
                </div>)
            )
        )
    }
}

const matchStateToProps = (state) => {

    return {
        loading: state.usersPostReducer.loading,
        userPost: state.usersPostReducer.userPost,
        error: state.usersPostReducer.error,
        commentLoading: state.usersCommentReducer.loading,
        usersComment: state.usersCommentReducer.usersComment,
        commentErr: state.usersCommentReducer.error
    }

}

const matchDispatchToProps = (dispatch) => {

    return {
        fetchUserPost: (postId) => dispatch(fetchUserPost(postId)),
        fetchUserComment: (postId) => dispatch(fetchUserComment(postId))
    }
}

export default connect(matchStateToProps, matchDispatchToProps)(Post)