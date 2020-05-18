import React, { Component } from "react";
import AlbumsCard from "./AlbumsCard";
import "../assets/styles/Albums.css";
import { fetchAlbums } from '../redux/async-api/albums.js'
import { connect } from "react-redux";
class Albums extends Component {
    componentDidMount() {
        this.props.albumsList()
    }
    render() {
        const { loading, albums, error } = this.props
        var allAlbums = albums.map(album => {
            return (
                <div className="albums mb-3" key={album.id}>
                    <AlbumsCard

                        title={album.title}
                        id={album.id}
                        userId={album.userId}
                    />
                </div>
            );
        })
        return loading === true ? <div>Loading...</div> : (error !== '' ? <div>Something went wrong</div> :
            <div className="all-albums">{allAlbums}</div>)
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.albumsReducer.loading,
        albums: state.albumsReducer.albums,
        error: state.albumsReducer.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        albumsList: () => dispatch(fetchAlbums()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums)