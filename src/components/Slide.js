
import React, { memo } from "react";
const style = {
    container: "abs fullW fullH",
    slideImage: "fullH fullW imgCover"
};
const Slide = ({ position, transition, image }) => {
    return (
        <div className={style.container + " " + position + " " + transition}>
            <img src={image} className={style.slideImage} alt="slide" />
        </div>
    );
};

export default memo(Slide);