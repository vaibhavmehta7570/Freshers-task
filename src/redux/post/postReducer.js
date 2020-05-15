import { FETCH_POST_DETAILS } from "./postTypes";
const postReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_POST_DETAILS:
            return action.data;
        default:
            return state
    };
};
export default postReducer;