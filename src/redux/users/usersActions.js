import { FETCH_USERS } from "./usersTypes"
export const getUsers = (data) => {
    return {
        type: FETCH_USERS,
        data,
    };
};