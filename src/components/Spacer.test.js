
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Spacer from './Spacer';

const mockStore = configureMockStore();
const store = mockStore({});

let wrapped = shallow(
    <Provider store={store}>
        <Spacer />
    </Provider>
)


describe("Spacer Component", () => {

    it("Spacer should render without throwing an error", () => {
        expect(wrapped).toMatchSnapshot();
    });
});