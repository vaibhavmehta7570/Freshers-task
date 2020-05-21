import * as actionTypes from '../action-constant';
import albumPhotosReducer from './albumPhotosReducer';

describe('Albums photo Reducer', () => {

    const initialState = {
        loading: false,
        photos: [],
        error: '',
    }

    it('should return Initial state', () => {
        expect(
            albumPhotosReducer(undefined, {})
        ).toEqual(initialState)
    })

    it('should handle FETCH_ALBUM_PHOTOS_REQUEST', () => {
        expect(
            albumPhotosReducer({}, {
                type: actionTypes.FETCH_ALBUM_PHOTOS_REQUEST
            })
        ).toEqual(
            {
                loading: true,
            }
        )
    })

    it('should handle FETCH_ALBUM_PHOTOS_SUCCESS', () => {
        const payload = "payload"
        expect(
            albumPhotosReducer(initialState, {
                type: actionTypes.FETCH_ALBUM_PHOTOS_SUCCESS,
                payload: payload
            })
        ).toEqual(
            {
                loading: false,
                photos: payload,
                error: ''
            }
        )
    })

    it('should handle FETCH_ALBUM_PHOTOS_FAILURE', () => {
        const payload = "error"
        expect(
            albumPhotosReducer(initialState, {
                type: actionTypes.FETCH_ALBUM_PHOTOS_FAILURE,
                payload: payload
            })
        ).toEqual(
            {
                loading: false,
                photos: [],
                error: payload
            }
        )
    })

})