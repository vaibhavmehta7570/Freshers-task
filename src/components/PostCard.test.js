
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import PostCard from './PostCard';

const mockStore = configureMockStore();
const store = mockStore({});

let wrapped = shallow(
    <Provider store={store}>
        <PostCard />
    </Provider>
)


describe("PostCard Component", () => {

    it("PostCard should render without throwing an error", () => {
        expect(wrapped).toMatchSnapshot();
    });
});