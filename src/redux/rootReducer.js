import { combineReducers } from "redux";
import postsReducer from "./posts/postsReducer";
import usersReducer from "./users/usersReducer";
import userReducer from "./user/userReducer";
import albumsReducer from "./albums/albumsReducer";
import corouselReducer from "./corousel/ corouselReducer";
import commentReducer from "./comments/commentsReducer";
import postReducer from "./post/postReducer";
const rootReducer = combineReducers({
    post: postsReducer,
    user: usersReducer,
    userInformation: userReducer,
    album: albumsReducer,
    image: corouselReducer,
    comment: commentReducer,
    postDetail: postReducer

})
export default rootReducer;