import React, { Component } from 'react';
import Slideshow from "./Slideshow";
import "../assets/styles/Slider.css";

const s = {
    container: "screenW screenH dGray col",
    header: "flex1 fCenter fSize2",
    main: "flex8 white",
    footer: "flex1 fCenter"
};

class Slider extends Component {
    render() {
        const slides = this.props.images.map((image, index) => image.url);
        return (
            <div className={s.container} >

                <div className={s.main}>
                    <Slideshow slides={slides} />
                </div>

            </div>
        );
    }
}
export default Slider;
