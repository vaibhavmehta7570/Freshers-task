import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { fetchUsersRequest, fetchUsersSuccess } from "../actions/users";
import fetchMock from "fetch-mock";
import expect from "expect";
import { fetchUsers } from "./users";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates FETCH_USERS_POST_SUCCESS when fetching posts has been done", () => {
    fetchMock.getOnce(`https://jsonplaceholder.typicode.com/users`, {
      payload: [{ todos: ["do something"] }],
    });

    const expectedActions = [
      fetchUsersRequest(),
      fetchUsersSuccess({ payload: [{ todos: ["do something"] }] }),
    ];
    const store = mockStore({ todos: [] });
    return store.dispatch(fetchUsers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
