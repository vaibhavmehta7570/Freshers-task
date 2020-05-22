import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { fetchAlbumsRequest, fetchAlbumsSuccess } from "../actions/albums"
import { fetchAlbums } from './albums';
import fetchMock from 'fetch-mock'
import expect from 'expect'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
    afterEach(() => {
        fetchMock.restore()
    })

    it('creates FETCH_ALBUMS_SUCCESS when fetching albums has been done', () => {
        fetchMock.getOnce(`https://jsonplaceholder.typicode.com/albums`, {
            payload: [{ todos: ['do something'] }],
        })

        const expectedActions = [
            fetchAlbumsRequest(), fetchAlbumsSuccess({ payload: [{ todos: ['do something'] }] })
        ]
        const store = mockStore({ todos: [] })
        return store.dispatch(fetchAlbums()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})