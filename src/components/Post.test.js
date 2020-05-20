
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Post from './Post';

const mockStore = configureMockStore();
const store = mockStore({});

let wrapped = shallow(
    <Provider store={store}>
        <Post />
    </Provider>
)


describe("Posts Component", () => {

    it("Posts should render without throwing an error", () => {
        expect(wrapped).toMatchSnapshot();
    });
});