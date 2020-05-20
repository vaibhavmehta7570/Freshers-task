
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Slide from './Slide';

const mockStore = configureMockStore();
const store = mockStore({});

let wrapped = shallow(
    <Provider store={store}>
        <Slide />
    </Provider>
)


describe("Slide Component", () => {

    it("Slide should render without throwing an error", () => {
        expect(wrapped).toMatchSnapshot();
    });
});