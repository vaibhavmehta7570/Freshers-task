import React, { Component } from "react";
import AlbumsCard from "./AlbumsCard";
import "../assets/styles/Albums.css";
import { fetchAlbums } from "../redux";
import { connect } from "react-redux";
class Albums extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            error: false
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res => res.json())
            .then(data => {
                this.props.fetchAlbums(data);
                this.setState({
                    isLoaded: true,
                })
            })
            .catch(err => {
                console.error(err);
                this.setState({
                    error: true
                })
            })
    }
    render() {
        var { isLoaded, error } = this.state;
        var allAlbums = this.props.albums.map(album => {
            return (
                <div className="albums mb-3">
                    <AlbumsCard
                        key={album.id}
                        title={album.title}
                        id={album.id}
                        userId={album.userId}
                    />
                </div>
            );
        })
        if (!isLoaded && error) {
            return (<div> Something went wrong...</div>)
        }
        else if (!isLoaded) {
            return <div> Loading...</div>;
        }
        else {
            return (
                <div className="all-albums">
                    {allAlbums}
                </div>
            );
        }
    }
}
const mapStateToProps = (state) => {
    return {
        albums: state.album,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAlbums: (data) => dispatch(fetchAlbums(data))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Albums);