import { FETCH_USERS } from "./usersTypes";
const usersReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_USERS:
            return action.data;
        default:
            return state
    };
};
export default usersReducer;