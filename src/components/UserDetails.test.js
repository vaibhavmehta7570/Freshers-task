
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import UserDetails from './UserDetails';

const mockStore = configureMockStore();
const store = mockStore({});

let wrapped = shallow(
    <Provider store={store}>
        <UserDetails />
    </Provider>
)


describe("UserDetails Component", () => {

    it("UserDetails should render without throwing an error", () => {
        expect(wrapped).toMatchSnapshot();
    });
});