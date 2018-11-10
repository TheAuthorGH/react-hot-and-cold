import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';

import store from '../store';
import App from './app';

describe('<App/>', () => {

	it('Renders without crashing', () => {
		shallow(
			<Provider store={store}>
				<App store={store}/>
			</Provider>
		);
	});

	it('Should contain a footer, header and main', () => {
		const wrapper = mount(
			<Provider store={store}>
				<App store={store}/>
			</Provider>
		);

		expect(wrapper.find('header').exists()).toEqual(true);
		expect(wrapper.find('main').exists()).toEqual(true);
		expect(wrapper.find('footer').exists()).toEqual(true);
	});

});