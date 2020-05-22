import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { fetchUsersPostRequest, fetchUsersPostSuccess } from "../actions/userPost"
import { fetchUserPost } from './usersPost';
import fetchMock from 'fetch-mock'
import expect from 'expect'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
    afterEach(() => {
        fetchMock.restore()
    })

    it('creates FETCH_USERS_POST_SUCESS when fetching posts has been done', () => {
        fetchMock.getOnce(`https://jsonplaceholder.typicode.com/posts/1`, {
            payload: [{ todos: ['do something'] }],
        })

        const expectedActions = [
            fetchUsersPostRequest(), fetchUsersPostSuccess({ payload: [{ todos: ['do something'] }] })
        ]
        const store = mockStore({ todos: [] })
        return store.dispatch(fetchUserPost()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})