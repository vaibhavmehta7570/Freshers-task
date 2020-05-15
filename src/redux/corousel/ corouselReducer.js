import { FETCH_IMAGES } from "./corouselTypes";
const corouselReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_IMAGES:
            return action.data;
        default:
            return state
    };
};
export default corouselReducer;