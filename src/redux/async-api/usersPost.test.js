import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  fetchUsersPostRequest,
  fetchUsersPostSuccess,
  fetchUsersCommentRequest,
  fetchUsersCommentSuccess,
} from "../actions/userPost";
import { fetchUserPost, fetchUserComment } from "./usersPost";
import fetchMock from "fetch-mock";
import expect from "expect";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates FETCH_USERS_POST_SUCESS when fetching posts has been done", () => {
    fetchMock.getOnce(`https://jsonplaceholder.typicode.com/posts/1`, {
      payload: [{ todos: ["do something"] }],
    });

    const expectedActions = [
      fetchUsersPostRequest(),
      fetchUsersPostSuccess({ payload: [{ todos: ["do something"] }] }),
    ];
    const store = mockStore({ todos: [] });
    return store.dispatch(fetchUserPost(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates FETCH_USERS_COMMENT_SUCCESS when fetching posts has been done", () => {
    fetchMock.getOnce(`https://jsonplaceholder.typicode.com/comments`, {
      payload: [{ todos: ["do something"] }],
    });

    const expectedActions = [
      fetchUsersCommentRequest(),
      fetchUsersCommentSuccess({ payload: [{ todos: ["do something"] }] }),
    ];
    const store = mockStore({ todos: [] });
    return store.dispatch(fetchUserComment()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
