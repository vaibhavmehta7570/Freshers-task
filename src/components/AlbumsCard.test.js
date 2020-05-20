
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import AlbumsCard from './AlbumsCard';

const mockStore = configureMockStore();
const store = mockStore({});

let wrapped = shallow(
    <Provider store={store}>
        <AlbumsCard />
    </Provider>
)


describe("AlbumsCard Component", () => {

    it("AlbumsCard should render without throwing an error", () => {
        expect(wrapped).toMatchSnapshot();
    });
});