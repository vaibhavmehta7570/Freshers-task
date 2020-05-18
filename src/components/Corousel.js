import React, { Component } from "react";
import Slider from "./Slider";
import "../assets/styles/Slider.css"
import { fetchAlbumPhotos } from '../redux/async-api/albumPhotos.js'
import { connect } from "react-redux";
class Corousel extends Component {
    componentDidMount() {
        const albumId = this.props.match.params.id
        this.props.albumPhotos(albumId)
    }
    render() {
        const { loading, photos, error } = this.props
        console.log(photos)
        return (
            loading === true ? <div>Loading...</div> : (error === '' ? <Slider images={photos} /> : <div>{error.message}</div>)
        )
    }
}
const mapStateToProps = (state) => {
    return {
        loading: state.albumPhotosReducer.loading,
        photos: state.albumPhotosReducer.photos,
        error: state.albumPhotosReducer.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        albumPhotos: (albumId) => dispatch(fetchAlbumPhotos(albumId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Corousel)