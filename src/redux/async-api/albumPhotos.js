import {
    fetchAlbumPhotosRequest,
    fetchAlbumPhotosSuccess,
    fetchAlbumPhotosFailure,
} from '../actions/albumPhotos.js'

export const fetchAlbumPhotos = (albumId) => {
    return (dispatch) => {
        dispatch(fetchAlbumPhotosRequest())
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(res => res.json())
            .then(response => {
                dispatch(fetchAlbumPhotosSuccess(response))
            })
            .catch(error => {
                dispatch(fetchAlbumPhotosFailure(error))
            })
    }
}
