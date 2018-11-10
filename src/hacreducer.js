import * as actions from './hacactions';

export function initialState() {
	return {
		answer: Math.round(Math.random() * 100),
		history: [],
		gameover: false		
	};
}

export const hacReducer = (state = initialState(), action) => {
	switch(action.type) {
		case actions.SUBMIT_NUMBER:
			const newHistory = state.history.includes(action.num) ?
				state.history : [...state.history, action.num]
			return Object.assign({}, state, {
				history: newHistory,
				gameover: action.num === state.answer
			});

		case actions.RESET_GAME:
			return initialState();
			
		default:
			return state;
	}
};