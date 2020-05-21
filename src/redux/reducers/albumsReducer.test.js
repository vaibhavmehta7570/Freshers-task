import * as actionTypes from "../action-constant";

import albumsReducer from "./albumsReducer";

describe('Album Reducer', () => {
    const initialState = {
        loading: false,
        albums: [],
        error: "",
    }
    it('should return Initial state', () => {
        expect(albumsReducer(undefined, {}))
            .toEqual(initialState)
    })
    it('should handel FETCH_ALBUM_REQUEST', () => {
        expect(albumsReducer({}, {
            type: actionTypes.FETCH_ALBUMS_REQUEST
        }))
            .toEqual({
                loading: true,
            })
    })
    it('should handel FETCH_ALBUM_SUCESS', () => {
        const payload = 'payload'
        expect(albumsReducer(initialState, {
            type: actionTypes.FETCH_ALBUMS_SUCCESS,
            payload: payload
        }))
            .toEqual({
                loading: false,
                albums: payload,
                error: ''
            })
    })
    it('should handle FETCH_ALBUM_FAILURE', () => {
        const payload = "error"
        expect(
            albumsReducer(initialState, {
                type: actionTypes.FETCH_ALBUMS_FAILURE,
                payload: payload
            })
        ).toEqual({
            loading: false,
            albums: [],
            error: payload
        })
    })
})