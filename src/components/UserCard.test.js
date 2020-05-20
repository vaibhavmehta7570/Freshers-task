
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import UserCard from './UserCard';

const mockStore = configureMockStore();
const store = mockStore({});

let wrapped = shallow(
    <Provider store={store}>
        <UserCard />
    </Provider>
)


describe("UserCard Component", () => {

    it("UserCard should render without throwing an error", () => {
        expect(wrapped).toMatchSnapshot();
    });
});