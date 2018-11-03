import React from 'react';
import {shallow, mount} from 'enzyme';

import App from './app';

describe('<App/>', () => {

	it('Renders without crashing', () => {
		shallow(<App/>);
	});

	it('Should contain a footer, header and main', () => {
		const wrapper = mount(<App/>);
		expect(wrapper.find('header').exists()).toEqual(true);
		expect(wrapper.find('main').exists()).toEqual(true);
		expect(wrapper.find('footer').exists()).toEqual(true);
	});

});