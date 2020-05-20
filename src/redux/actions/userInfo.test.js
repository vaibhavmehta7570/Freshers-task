import * as actions from './userInfo';
import * as types from '../action-constant';

describe('userInfo actions', () => {
    test('return userInfo action request object', () => {
        const expected = {
            type: types.FETCH_USERS_INFO_REQUEST
        }
        expect(actions.fetchUserInfoRequest()).toEqual(expected)
    })
    test('return userInfo action for success object', () => {
        const payload = "sucess Object"
        const expected = {
            type: types.FETCH_USERS_INFO_SUCCESS,
            payload
        }
        expect(actions.fetchUserInfoSuccess(payload)).toEqual(expected)
    })
    test('return userInfo action error', () => {
        const payload = "error"
        const expected = {
            type: types.FETCH_USERS_INFO_FAILURE,
            payload
        }
        expect(actions.fetchUserInfoFailure(payload)).toEqual(expected)
    })
})