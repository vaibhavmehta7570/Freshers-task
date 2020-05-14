import { FETCH_USER } from "./userTypes"
export const fetchUserDetails = (data) => {
    return {
        type: FETCH_USER,
        data,
    };
};