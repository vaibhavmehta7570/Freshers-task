
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import IndividualUser from './IndividualUser';

const mockStore = configureMockStore();
const store = mockStore({});

let wrapped = shallow(
    <Provider store={store}>
        <IndividualUser />
    </Provider>
)


describe("IndividualUser Component", () => {

    it("IndividualUser should render without throwing an error", () => {
        expect(wrapped).toMatchSnapshot();
    });
});