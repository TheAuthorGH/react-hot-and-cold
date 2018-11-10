import React from 'react';
import {shallow, mount} from 'enzyme';

import { HACGame } from './hacgame';
import * as actions from '../actions/hacactions';

describe('<HACGame/>', () => {

	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		shallow(<HACGame answer={50} history={[]} gameover={false} dispatch={dispatch}/>);
	});

	it('Should render an instance of the hot and cold game.', () => {
		const dispatch = jest.fn();
		const wrapper = shallow(<HACGame answer={50} history={[]} gameover={false} dispatch={dispatch}/>);
		
		expect(wrapper.hasClass('hacgame')).toEqual(true);
	});

	it('Should start with the default reset state', () => {
		const dispatch = jest.fn();
		const wrapper = mount(<HACGame answer={50} history={[]} gameover={false} dispatch={dispatch}/>);
		
		expect(wrapper.prop('gameover')).toEqual(false);
		expect(wrapper.prop('history')).toEqual([]);
		expect(wrapper.prop('answer')).toBeGreaterThan(0);
		expect(wrapper.prop('answer')).toBeLessThan(100);
	});

	it('Should accept numbers in order to play', () => {
		const dispatch = jest.fn();
		const wrapper = mount(<HACGame answer={50} history={[]} gameover={false} dispatch={dispatch}/>);
		dispatch.mockClear();
		wrapper.find('input').instance().value = '50';
		wrapper.find('form').simulate('submit');
		
		expect(dispatch).toHaveBeenCalledWith(actions.submitNumber(50));
	});

});