
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Cards from './Cards';

const mockStore = configureMockStore();
const store = mockStore({});

let wrapped = shallow(
    <Provider store={store}>
        <Cards />
    </Provider>
)


describe("Cards Component", () => {

    it("Cards should render without throwing an error", () => {
        expect(wrapped).toMatchSnapshot();
    });
});