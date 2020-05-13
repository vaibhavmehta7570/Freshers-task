import React, { Component } from "react";
import AlbumsCard from "./AlbumsCard";
import "../assets/styles/Albums.css";
class Albums extends Component {
    constructor(props) {
        super(props)
        this.state = {
            albums: [],
            isLoaded: false
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
            });
    }
    render() {
        var { isLoaded, albums } = this.state;
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
        if (!isLoaded) {
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