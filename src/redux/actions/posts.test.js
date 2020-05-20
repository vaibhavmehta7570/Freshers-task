import * as actions from './posts';
import * as types from '../action-constant';

describe('albums actions', () => {
    test('return posts action request object', () => {
        const expected = {
            type: types.FETCH_POSTS_REQUEST
        }
        expect(actions.fetchPostsRequest()).toEqual(expected)
    })
    test('return posts action for success object', () => {
        const payload = "sucess Object"
        const expected = {
            type: types.FETCH_POSTS_SUCCESS,
            payload
        }
        expect(actions.fetchPostsSuccess(payload)).toEqual(expected)
    })
    test('return posts action error', () => {
        const payload = "error"
        const expected = {
            type: types.FETCH_POSTS_FAILURE,
            payload
        }
        expect(actions.fetchPostsFailure(payload)).toEqual(expected)
    })
})