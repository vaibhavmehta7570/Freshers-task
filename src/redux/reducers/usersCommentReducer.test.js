import * as actionTypes from "../action-constant";

import usersCommentReducer from "./usersCommentReducer";

describe('usersCommentReducer Reducer', () => {
    const initialState = {
        loading: false,
        usersComment: [],
        error: "",
    }
    it('should return Initial state', () => {
        expect(usersCommentReducer(undefined, {}))
            .toEqual(initialState)
    })
    it('should handel FETCH_USERS_COMMENT_REQUEST', () => {
        expect(usersCommentReducer({}, {
            type: actionTypes.FETCH_USERS_COMMENT_REQUEST
        }))
            .toEqual({
                loading: true,
            })
    })
    it('should handel FETCH_USERS_COMMENT_SUCCESS', () => {
        const payload = "payload"
        expect(usersCommentReducer(initialState, {
            type: actionTypes.FETCH_USERS_COMMENT_SUCCESS,
            payload: payload
        }))
            .toEqual({
                loading: false,
                usersComment: payload,
                error: ''
            })
    })
    it('should handle FETCH_USERS_COMMENT_FAILURE', () => {
        const payload = "error"
        expect(
            usersCommentReducer(initialState, {
                type: actionTypes.FETCH_USERS_COMMENT_FAILURE,
                payload: payload
            })
        ).toEqual({
            loading: false,
            usersComment: [],
            error: payload
        })
    })
})