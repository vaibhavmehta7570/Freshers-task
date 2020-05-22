import {
    fetchUserInfoRequest,
    fetchUserInfoSuccess,
    fetchUserInfoFailure,
} from '../actions/userInfo.js'

export const fetchUserInfo = (userId) => {
    return (dispatch) => {
        dispatch(fetchUserInfoRequest(userId))
        return fetch(`https://jsonplaceholder.typicode.com/users/${userId || 1}`)
            .then(data => data.json())
            .then(data => {
                dispatch(fetchUserInfoSuccess(data))
            })
            .catch(error => {
                dispatch(fetchUserInfoFailure(error))
            })
    }
}