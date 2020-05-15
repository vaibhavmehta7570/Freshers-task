import { FETCH_POST_DETAILS } from "./postTypes"
export const getPostDetails = (data) => {
    return {
        type: FETCH_POST_DETAILS,
        data,
    };
};