import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';
import { findByTestAttribute } from "../../Utils"

const setUp = (props = {}) => {
    const component = shallow(<Navbar {...props} />)
    return component;
};


describe('Header Component', () => {
    let component;
    beforeEach(() => {
        component = setUp();

    })
    it('It should display Home button without errors', () => {
        const element = findByTestAttribute(component, 'home-button');
        expect(element.length).toBe(1);
    })
    it('It should display Users button without errors', () => {
        const element = findByTestAttribute(component, 'users-button');
        expect(element.length).toBe(1);
    })
    it('It should display Albums button without errors', () => {
        const element = findByTestAttribute(component, 'albums-button');
        expect(element.length).toBe(1);
    })

})
