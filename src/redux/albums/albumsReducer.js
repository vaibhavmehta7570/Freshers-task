import { FETCH_ALBUMS } from "./albumsTypes";
const albumsReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_ALBUMS:
            return action.data;
        default:
            return state
    };
};
export default albumsReducer;