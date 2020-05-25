import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "../actions/users.js";
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((response) => {
        dispatch(fetchUsersSuccess(response));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error));
      });
  };
};
