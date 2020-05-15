import { FETCH_COMMENTS } from "./commentsTypes"
export const getComments = (data) => {
    return {
        type: FETCH_COMMENTS,
        data,
    };
};