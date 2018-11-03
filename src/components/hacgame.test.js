import React from 'react';
import {shallow, mount} from 'enzyme';

import HACGame from './hacgame';

describe('<HACGame/>', () => {

	it('Renders without crashing', () => {
		shallow(<HACGame/>);
	});

	it('Should render an instance of the hot and cold game.', () => {
		const wrapper = shallow(<HACGame/>);
		expect(wrapper.hasClass('hacgame')).toEqual(true);
	});

	it('Should start with the default reset state', () => {
		const wrapper = mount(<HACGame/>);
		expect(wrapper.state('gameover')).toEqual(false);
		expect(wrapper.state('history')).toEqual([]);
		expect(wrapper.state('answer')).toBeGreaterThan(0);
		expect(wrapper.state('answer')).toBeLessThan(100);
	});

	it('Should accept numbers in order to play', () => {
		const wrapper = mount(<HACGame/>);
		wrapper.find('input').instance().value = '50';
		wrapper.find('form').simulate('submit');
		expect(wrapper.state('history')).toEqual([50]);
	});

	it('Should end the game once the correct answer is provided', () => {
		const wrapper = mount(<HACGame/>);
		wrapper.find('input').instance().value = wrapper.state('answer');
		wrapper.find('form').simulate('submit');
		expect(wrapper.state('gameover')).toEqual(true);
	});

});