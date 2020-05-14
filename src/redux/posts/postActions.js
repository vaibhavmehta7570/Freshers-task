import { FETCH_POSTS } from "./postTypes"
export const getPosts = (data) => {
    return {
        type: FETCH_POSTS,
        data,
    };
};