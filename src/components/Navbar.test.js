// import React from "react";
// import { shallow } from "enzyme";
// import Navbar from "./Navbar";
// import { findByTestAttribute } from "../../Utils"

// const setUp = (props = {}) => {
//     const component = shallow(<Navbar {...props} />)
//     return component;
// };

// describe('Header Component', () => {
//     let component;
//     beforeEach(() => {
//         component = setUp();

//     })
//     it('It should display Home button without errors', () => {
//         const element = findByTestAttribute(component, 'home-button');
//         expect(element.length).toBe(1);
//     })
//     it('It should display Users button without errors', () => {
//         const element = findByTestAttribute(component, 'users-button');
//         expect(element.length).toBe(1);
//     })
//     it('It should display Albums button without errors', () => {
//         const element = findByTestAttribute(component, 'albums-button');
//         expect(element.length).toBe(1);
//     })

// })

import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Navbar from "./Navbar";

const mockStore = configureMockStore();
const store = mockStore({});

let wrapped = shallow(
  <Provider store={store}>
    <Navbar />
  </Provider>
);

describe("Navbar Component", () => {
  it("Navbar should render without throwing an error", () => {
    expect(wrapped).toMatchSnapshot();
  });
});
