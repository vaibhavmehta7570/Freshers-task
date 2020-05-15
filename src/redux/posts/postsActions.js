import { FETCH_POSTS } from "./postsTypes"
export const getPosts = (data) => {
    return {
        type: FETCH_POSTS,
        data,
    };
};