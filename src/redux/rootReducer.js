import { combineReducers } from "redux";
import postReducer from "./posts/postReducer";
import usersReducer from "./users/usersReducer";
import userReducer from "./user/userReducer";
const rootReducer = combineReducers({
    post: postReducer,
    user: usersReducer,
    userInformation: userReducer,
})
export default rootReducer;