import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { fetchUserInfoRequest, fetchUserInfoSuccess } from "../actions/userInfo"
import { fetchUserInfo } from './userInfo';
import fetchMock from 'fetch-mock'
import expect from 'expect'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
    afterEach(() => {
        fetchMock.restore()
    })

    it('creates FETCH_USERS_INFO_SUCESS when fetching posts has been done', () => {
        fetchMock.getOnce(`https://jsonplaceholder.typicode.com/users/1`, {
            payload: [{ todos: ['do something'] }],
        })

        const expectedActions = [
            fetchUserInfoRequest(), fetchUserInfoSuccess({ payload: [{ todos: ['do something'] }] })
        ]
        const store = mockStore({ todos: [] })
        return store.dispatch(fetchUserInfo()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})