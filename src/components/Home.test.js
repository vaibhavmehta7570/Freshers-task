// import React from 'react';
// import { shallow, mount } from 'enzyme';
// import Home from './Home';
// import { Provider } from 'react-redux';
// import configureMockStore from "redux-mock-store";

// const mockStore = configureMockStore();
// const store = mockStore({});
// describe('Home Component', () => {

//     it('Home component', () => {
//         const component = shallow(<Provider store={store}
//         ><Home />
//         </Provider>
//         );
//         console.log(component.debug());
//         const wrapper = component.dive().find(`[data-test='home']`);
//         expect(wrapper.length).toBe(1);
//     })

// });

import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Home from './Home';

const mockStore = configureMockStore();
const store = mockStore({});

let wrapped = shallow(
    <Provider store={store}>
        <Home />
    </Provider>
)


describe("Home Component", () => {

    it("Albums should render without throwing an error", () => {
        expect(wrapped).toMatchSnapshot();
    });
});