import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { fetchPostsRequest, fetchPostsSuccess } from "../actions/posts"
import { fetchPosts } from './posts';
import fetchMock from 'fetch-mock'
import expect from 'expect'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
    afterEach(() => {
        fetchMock.restore()
    })

    it('creates FETCH_POSTS_SUCCESS when fetching posts has been done', () => {
        fetchMock.getOnce('https://jsonplaceholder.typicode.com/posts', {
            payload: [{ todos: ['do something'] }],
        })

        const expectedActions = [
            fetchPostsRequest(), fetchPostsSuccess({ payload: [{ todos: ['do something'] }] })
        ]
        const store = mockStore({ todos: [] })
        return store.dispatch(fetchPosts()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})