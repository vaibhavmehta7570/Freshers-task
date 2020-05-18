import {
    fetchUsersPostRequest,
    fetchUsersPostSuccess,
    fetchUsersPostFailure,
    fetchUsersCommentRequest,
    fetchUsersCommentSuccess,
    fetchUsersCommentFailure
} from '../actions/userPost.js'

export const fetchUserPost = (postId) => {
    return (dispatch) => {
        dispatch(fetchUsersPostRequest())
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(data => data.json())
            .then(response => {
                dispatch(fetchUsersPostSuccess(response))
            })
            .catch(error => {
                dispatch(fetchUsersPostFailure(error))
            })
    }
}

export const fetchUserComment = (postId) => {
    return (dispatch) => {
        dispatch(fetchUsersCommentRequest())
        fetch(`https://jsonplaceholder.typicode.com/comments`)
            .then(data => data.json())
            .then(response => {
                dispatch(fetchUsersCommentSuccess(response))
            })
            .catch(error => {
                dispatch(fetchUsersCommentFailure(error))
            })
    }
}