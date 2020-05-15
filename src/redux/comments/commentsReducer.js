import { FETCH_COMMENTS } from "./commentsTypes";
const commentsReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_COMMENTS:
            return action.data;
        default:
            return state
    };
};
export default commentsReducer;