import { FETCH_POSTS } from "./postTypes";
const postReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return action.data;
        default:
            return state
    };
};
export default postReducer;