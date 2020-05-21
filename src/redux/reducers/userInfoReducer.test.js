import * as actionTypes from "../action-constant";

import userInfoReducer from "./userInfoReducer";

describe('userInfo Reducer', () => {
    const initialState = {
        loading: false,
        userDetails: {},
        error: "",
    }
    it('should return Initial state', () => {
        expect(userInfoReducer(undefined, {}))
            .toEqual(initialState)
    })
    it('should handel FETCH_USERS_INFO_REQUEST', () => {
        expect(userInfoReducer({}, {
            type: actionTypes.FETCH_USERS_INFO_REQUEST
        }))
            .toEqual({
                loading: true,
            })
    })
    it('should handel FETCH_ALBUM_SUCCESS', () => {
        const payload = "payload"
        expect(userInfoReducer(initialState, {
            type: actionTypes.FETCH_USERS_INFO_SUCCESS,
            payload: payload
        }))
            .toEqual({
                loading: false,
                userDetails: payload,
                error: ''
            })
    })
    it('should handle FETCH_USERS_INFO_FAILURE', () => {
        const payload = "error"
        expect(
            userInfoReducer(initialState, {
                type: actionTypes.FETCH_USERS_INFO_FAILURE,
                payload: payload
            })
        ).toEqual({
            loading: false,
            userDetails: {},
            error: payload
        })
    })
})