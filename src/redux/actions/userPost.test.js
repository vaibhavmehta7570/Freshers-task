import * as actions from './userPost';
import * as types from '../action-constant';

describe('userInfo actions', () => {
    test('return userPost action request object', () => {
        const expected = {
            type: types.FETCH_USERS_POST_REQUEST
        }
        expect(actions.fetchUsersPostRequest()).toEqual(expected)
    })
    test('return userPost action for success object', () => {
        const payload = "sucess Object"
        const expected = {
            type: types.FETCH_USERS_POST_SUCCESS,
            payload
        }
        expect(actions.fetchUsersPostSuccess(payload)).toEqual(expected)
    })
    test('return userPost action error', () => {
        const payload = "error"
        const expected = {
            type: types.FETCH_USERS_POST_FAILURE,
            payload
        }
        expect(actions.fetchUsersPostFailure(payload)).toEqual(expected)
    })
})