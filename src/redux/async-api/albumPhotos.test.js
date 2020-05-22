import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { fetchAlbumPhotosRequest, fetchAlbumPhotosSuccess } from "../actions/albumPhotos"
import { fetchAlbumPhotos } from './albumPhotos';
import fetchMock from 'fetch-mock'
import expect from 'expect'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
    afterEach(() => {
        fetchMock.restore()
    })

    it('creates FETCH_ALBUM_PHOTOS_REQUEST when fetching album photos has been done', () => {
        fetchMock.getOnce(`https://jsonplaceholder.typicode.com/photos?albumId=1`, {
            payload: [{ todos: ['do something'] }],
        })

        const expectedActions = [
            fetchAlbumPhotosRequest(), fetchAlbumPhotosSuccess({ payload: [{ todos: ['do something'] }] })
        ]
        const store = mockStore({ todos: [] })
        return store.dispatch(fetchAlbumPhotos()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})