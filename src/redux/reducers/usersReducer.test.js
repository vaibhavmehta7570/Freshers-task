import * as actionTypes from "../action-constant";

import userReducer from "./usersReducer";

describe('userReducer Reducer', () => {
    const initialState = {
        loading: false,
        users: [],
        error: "",
    }
    it('should return Initial state', () => {
        expect(userReducer(undefined, {}))
            .toEqual(initialState)
    })
    it('should handel FETCH_USERS_REQUEST', () => {
        expect(userReducer({}, {
            type: actionTypes.FETCH_USERS_REQUEST
        }))
            .toEqual({
                loading: true,
            })
    })
    it('should handel FETCH_USERS_SUCCESS', () => {
        const payload = "payload"
        expect(userReducer(initialState, {
            type: actionTypes.FETCH_USERS_SUCCESS,
            payload: payload
        }))
            .toEqual({
                loading: false,
                users: payload,
                error: ''
            })
    })
    it('should handle FETCH_USERS_FAILURE', () => {
        const payload = "error"
        expect(
            userReducer(initialState, {
                type: actionTypes.FETCH_USERS_FAILURE,
                payload: payload
            })
        ).toEqual({
            loading: false,
            users: [],
            error: payload
        })
    })
})