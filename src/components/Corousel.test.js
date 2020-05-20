
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Corousel from './Corousel';

const mockStore = configureMockStore();
const store = mockStore({});

let wrapped = shallow(
    <Provider store={store}>
        <Corousel />
    </Provider>
)


describe("Corousel Component", () => {

    it("Corousel should render without throwing an error", () => {
        expect(wrapped).toMatchSnapshot();
    });
});