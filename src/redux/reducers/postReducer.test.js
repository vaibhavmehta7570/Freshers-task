import * as actionTypes from "../action-constant";

import postReducer from "./postReducer";

describe('Album Reducer', () => {
    const initialState = {
        loading: false,
        posts: [],
        error: "",
    }
    it('should return Initial state', () => {
        expect(postReducer(undefined, {}))
            .toEqual(initialState)
    })
    it('should handel FETCH_POSTS_REQUEST', () => {
        expect(postReducer({}, {
            type: actionTypes.FETCH_POSTS_REQUEST
        }))
            .toEqual({
                loading: true,
            })
    })
    it('should handel FETCH_POSTS_SUCCESS', () => {
        const payload = 'payload'
        expect(postReducer(initialState, {
            type: actionTypes.FETCH_POSTS_SUCCESS,
            payload: payload
        }))
            .toEqual({
                loading: false,
                posts: payload,
                error: ''
            })
    })
    it('should handle FETCH_POSTS_FAILURE', () => {
        const payload = "error"
        expect(
            postReducer(initialState, {
                type: actionTypes.FETCH_POSTS_FAILURE,
                payload: payload
            })
        ).toEqual({
            loading: false,
            posts: [],
            error: payload
        })
    })
})