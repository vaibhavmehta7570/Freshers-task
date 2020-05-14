import React, { Component } from 'react';
import "../assets/styles/Slider.css";
class Slider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            x: 0
        }
    }
    render() {
        var image_url = [];
        this.props.images.forEach(image => {
            image_url.push(image.url);
        });
        var sliderArr = image_url.map(image => {
            return (
                <img className="corousel-img" src={image} alt="slide-img"></img>
            )
        })
        console.log(sliderArr);

        return (
            <div className="slider">
                {
                    sliderArr.map((item, index) => {
                        return (
                            <div key={index} className="slide" style={{ transform: `translateX(${this.state.x}%)` }}>
                                {item}
                            </div>
                        )
                    })}
                <button id="goLeft" onClick={this.state.x === 0 ? () => this.setState({ x: -100 * (sliderArr.length - 1) }) : () => this.setState({ x: this.state.x + 100 })}>
                    <img src="https://img.icons8.com/android/24/000000/chevron-left.png" alt="Left" />
                </button>

                <button id="goRight" onClick={this.state.x === -100 * (sliderArr.length - 1) ? () => this.setState({ x: 0 }) : () => this.setState({ x: this.state.x - 100 })}>
                    <img src="https://img.icons8.com/android/24/000000/chevron-right.png" alt="right" />
                </button>
            </div>
        )
    }
}
export default Slider;
