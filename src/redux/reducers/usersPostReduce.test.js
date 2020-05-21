import * as actionTypes from "../action-constant";

import usersPostReducer from "./usersPostReduce";

describe('usersPostReduce Reducer', () => {
    const initialState = {
        loading: false,
        userPost: [],
        error: "",
    }
    it('should return Initial state', () => {
        expect(usersPostReducer(undefined, {}))
            .toEqual(initialState)
    })
    it('should handel FETCH_USERS_POST_REQUEST', () => {
        expect(usersPostReducer({}, {
            type: actionTypes.FETCH_USERS_POST_REQUEST
        }))
            .toEqual({
                loading: true,
            })
    })
    it('should handel FETCH_USERS_POST_SUCCESS', () => {
        const payload = "payload"
        expect(usersPostReducer(initialState, {
            type: actionTypes.FETCH_USERS_POST_SUCCESS,
            payload: payload
        }))
            .toEqual({
                loading: false,
                userPost: payload,
                error: ''
            })
    })
    it('should handle FETCH_USERS_POST_FAILURE', () => {
        const payload = "error"
        expect(
            usersPostReducer(initialState, {
                type: actionTypes.FETCH_USERS_POST_FAILURE,
                payload: payload
            })
        ).toEqual({
            loading: false,
            userPost: [],
            error: payload
        })
    })
})