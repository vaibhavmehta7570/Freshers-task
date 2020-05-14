import React, { Component } from "react";
import Slider from "./Slider";
class Corousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [],
            isLoaded: false,
            error: false
        }
    }
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${this.props.match.params.id}`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    images: json,
                    isLoaded: true,
                })
            })
            .catch(err => {
                console.error(err);
                this.setState({
                    error: true
                })
            });
    }
    render() {
        var { isLoaded, images, error } = this.state;
        if (!isLoaded && error) {
            return <div> Error!! Something went wrong </div>;

        }
        else if (!isLoaded) {
            return <div>Loading... </div>
        }
        else {
            return (
                <React.Fragment>
                    <Slider
                        images={images}
                    />
                </React.Fragment>
            );
        }
    }
}
export default Corousel;