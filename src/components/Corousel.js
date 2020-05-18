import React, { Component } from "react";
import Slider from "./Slider";
import "../assets/styles/Slider.css"
import { getImages } from "../redux";
import { connect } from "react-redux";
class Corousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            error: false
        }
    }
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${this.props.match.params.id}`)
            .then(res => res.json())
            .then(data => {
                this.props.getImages(data)
                this.setState({
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
        var { isLoaded, error } = this.state;
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

                        images={this.props.images}
                    />
                </React.Fragment>
            );
        }
    }
}
const mapStateToProps = (state) => {
    return {
        images: state.image,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getImages: (data) => dispatch(getImages(data))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Corousel);