import {
    fetchAlbumsRequest,
    fetchAlbumsSuccess,
    fetchAlbumsFailure,
} from '../actions/albums.js'

export const fetchAlbums = () => {
    return (dispatch) => {
        dispatch(fetchAlbumsRequest())
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res => res.json())
            .then(response => {
                dispatch(fetchAlbumsSuccess(response))
            })
            .catch(error => {
                dispatch(fetchAlbumsFailure(error))
            })
    }
}