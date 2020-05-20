import * as actions from './albumPhotos';
import * as types from '../action-constant';

describe('actions', () => {
    test('it should return action request object', () => {
        const expected = {
            type: types.FETCH_ALBUM_PHOTOS_REQUEST
        }
        expect(actions.fetchAlbumPhotosRequest()).toEqual(expected)
    })
    test('return action for success object', () => {
        const payload = "sucess Object"
        const expectedAction = {
            type: types.FETCH_ALBUM_PHOTOS_SUCCESS,
            payload
        }
        expect(actions.fetchAlbumPhotosSuccess(payload)).toEqual(expectedAction)
    })
    test('return action error', () => {
        const payload = "error"
        const expectedAction = {
            type: types.FETCH_ALBUM_PHOTOS_FAILURE,
            payload
        }
        expect(actions.fetchAlbumPhotosFailure(payload)).toEqual(expectedAction)
    })
})