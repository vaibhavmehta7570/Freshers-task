import { FETCH_USER } from "./userTypes";
const userReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_USER:
            return action.data;
        default:
            return state
    };
};
export default userReducer;