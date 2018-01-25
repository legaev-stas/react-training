import React from 'react';

import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({adapter: new Adapter()});

import {AppNavBar} from './category-list-page';


it('Component should hide add category icon when it is searchMode', () => {
    const tree = shallow(<AppNavBar searchMode/>);
    expect(toJson(tree)).toMatchSnapshot();
});
it('Component should show add category icon when it is not searchMode', () => {
    const tree = shallow(<AppNavBar/>);
    expect(toJson(tree)).toMatchSnapshot();
});
