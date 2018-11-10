import * as actions from '../actions/hacactions';
import {hacReducer, initialState} from './hacreducer';

describe('submitNumber', () => {
	it("Should submit numbers to the game's history", () => {
		let state = initialState();
		state = hacReducer(state, actions.submitNumber(50));
		
		expect(state.history[0]).toEqual(50);
	});

	it('Should trigger a gameover when a submitted number matches the answer', () => {
		let state = initialState();
		state.history = [1, 2, 3];
		state.gameover = true;
		state = hacReducer(state, actions.resetGame());

		expect(state.history).toEqual([]);
		expect(state.gameover).toEqual(false);
	});

	it('Should ignore numbers that have already been tried', () => {
		let state = initialState();
		state.history = [50];
		state = hacReducer(state, actions.submitNumber(50));

		expect(state.history).toEqual([50]);
	});
});

describe('resetGame', () => {

});