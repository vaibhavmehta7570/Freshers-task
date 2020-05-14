import React, { Component } from "react";
import AlbumsCard from "./AlbumsCard";
import "../assets/styles/Albums.css";
class Albums extends Component {
    constructor(props) {
        super(props)
        this.state = {
            albums: [],
            isLoaded: false,
            error: false
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res => res.json())
            .then(json => {
                console.log(json);
                this.setState({
                    albums: json,
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
        var { isLoaded, albums, error } = this.state;
        var allAlbums = albums.map(album => {
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
export default Albums;