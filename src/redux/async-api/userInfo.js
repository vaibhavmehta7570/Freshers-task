import {
    fetchUserInfoRequest,
    fetchUserInfoSuccess,
    fetchUserInfoFailure,
} from '../actions/userInfo.js'

export const fetchUserInfo = (userId) => {
    return (dispatch) => {
        dispatch(fetchUserInfoRequest(userId))
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(data => data.json())
            .then(data => {
                dispatch(fetchUserInfoSuccess(data))
            })
            .catch(error => {
                dispatch(fetchUserInfoFailure(error))
            })
    }
}