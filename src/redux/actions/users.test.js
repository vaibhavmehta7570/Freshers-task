import * as actions from './users';
import * as types from '../action-constant';

describe('users actions', () => {
    test('return users action request object', () => {
        const expected = {
            type: types.FETCH_USERS_REQUEST
        }
        expect(actions.fetchUsersRequest()).toEqual(expected)
    })
    test('return users action for success object', () => {
        const payload = "sucess Object"
        const expected = {
            type: types.FETCH_USERS_SUCCESS,
            payload
        }
        expect(actions.fetchUsersSuccess(payload)).toEqual(expected)
    })
    test('return userInfo action error', () => {
        const payload = "error"
        const expected = {
            type: types.FETCH_USERS_FAILURE,
            payload
        }
        expect(actions.fetchUsersFailure(payload)).toEqual(expected)
    })
})