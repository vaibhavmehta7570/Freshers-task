
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Dot from './Dot';

const mockStore = configureMockStore();
const store = mockStore({});

let wrapped = shallow(
    <Provider store={store}>
        <Dot />
    </Provider>
)


describe("Dot Component", () => {

    it("Dot should render without throwing an error", () => {
        expect(wrapped).toMatchSnapshot();
    });
});