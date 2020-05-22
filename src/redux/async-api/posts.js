import {
    fetchPostsRequest,
    fetchPostsSuccess,
    fetchPostsFailure,
} from '../actions/posts.js'
export const fetchPosts = () => {
    return (dispatch) => {
        dispatch(fetchPostsRequest())
        return fetch(`https://jsonplaceholder.typicode.com/posts`)

            .then(data => data.json())
            .then(data => {
                dispatch(fetchPostsSuccess(data))
            })
            .catch(error => {
                dispatch(fetchPostsFailure(error))
            })
    }
}