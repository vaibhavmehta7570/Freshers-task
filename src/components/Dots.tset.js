
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Dots from './Dots';

const mockStore = configureMockStore();
const store = mockStore({});

let wrapped = shallow(
    <Provider store={store}>
        <Dots />
    </Provider>
)


describe("Dots Component", () => {

    it("Dots should render without throwing an error", () => {
        expect(wrapped).toMatchSnapshot();
    });
});