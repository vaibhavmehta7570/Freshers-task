import { FETCH_IMAGES } from "./corouselTypes"
export const getImages = (data) => {
    return {
        type: FETCH_IMAGES,
        data,
    };
};