import React, { Component } from "react";
import Slide from "./Slide";
import Dots from "./Dots";
const style = {
    container: "fullW fullH rel overflowH",
    onScreen: "left0",
    offScreenRight: "left100vw",
    offScreenLeft: "leftM100vw",
    transition: "transition1l"
};
class Slideshow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slide1: {
                id: 0,
                position: style.onScreen,
                transition: true
            },
            slide2: {
                id: 1,
                position: style.offScreenRight,
                transition: true
            },
            currentId: 0
        };
    }

    componentDidMount() {
        this.startCarousel();
    }

    componentWillUnmount() {
        clearInterval(this.carouselInterval);
    }

    startCarousel = () => {
        this.carouselInterval = setInterval(() => {
            this.transitionSlides();
        }, 4000);
    };

    setSlideState = (slide1, slide2, currentId) => {
        this.setState({
            slide1: slide1,
            slide2: slide2,
            currentId: currentId
        });
    };

    transitionSlides = () => {
        const { slide1, slide2 } = this.state;
        let currentId;
        if (slide1["position"] === style.onScreen) {
            slide1["position"] = style.offScreenLeft;
            slide2["position"] = style.onScreen;
            currentId = slide2.id;
        } else {
            slide1["position"] = style.onScreen;
            slide2["position"] = style.offScreenLeft;
            currentId = slide1.id;
        }
        this.setSlideState(slide1, slide2, currentId);
        setTimeout(() => {
            this.resetSlideOffScreen();
        }, 1000);
    };

    resetSlideOffScreen = () => {
        const { slide1, slide2, currentId } = this.state;
        const { slides } = this.props;
        if (slide1["position"] === style.offScreenLeft) {
            slide1["transition"] = false;
            slide1["position"] = style.offScreenRight;
            slide1["id"] = slide2.id + 1 === slides.length ? 0 : slide2.id + 1;
        } else {
            slide2["transition"] = false;
            slide2["position"] = style.offScreenRight;
            slide2["id"] = slide1.id + 1 === slides.length ? 0 : slide1.id + 1;
        }
        this.setSlideState(slide1, slide2, currentId);
        this.resetSlideTransitions(slide1, slide2, currentId);
    };

    resetSlideTransitions = (slide1, slide2, currentId) => {
        setTimeout(() => {
            slide1["transition"] = true;
            slide2["transition"] = true;
            this.setSlideState(slide1, slide2, currentId);
        }, 500);
    };

    render() {
        const { slide1, slide2, currentId } = this.state;
        const { slides } = this.props;
        return (
            <div className={style.container}>
                <Slide
                    image={slides[slide1.id]}
                    position={slide1.position}
                    transition={slide1.transition ? style.transition : ""}
                />
                <Slide
                    image={slides[slide2.id]}
                    position={slide2.position}
                    transition={slide2.transition ? style.transition : ""}
                />
                <Dots slideId={currentId} slides={slides} />
            </div>
        );
    }
}

export default Slideshow;