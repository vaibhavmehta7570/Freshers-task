import * as actions from './albums';
import * as types from '../action-constant';

describe('albums actions', () => {
    test('return albums action request object', () => {
        const expected = {
            type: types.FETCH_ALBUMS_REQUEST
        }
        expect(actions.fetchAlbumsRequest()).toEqual(expected)
    })
    test('return albums action for success object', () => {
        const payload = "sucess Object"
        const expected = {
            type: types.FETCH_ALBUMS_SUCCESS,
            payload
        }
        expect(actions.fetchAlbumsSuccess(payload)).toEqual(expected)
    })
    test('return albums action error', () => {
        const payload = "error"
        const expected = {
            type: types.FETCH_ALBUMS_FAILURE,
            payload
        }
        expect(actions.fetchAlbumsFailure(payload)).toEqual(expected)
    })
})