export const SUBMIT_NUMBER = 'SUBMIT_NUMBER';
export const RESET_GAME = 'RESET_GAME';

export const submitNumber = num => ({
	type: SUBMIT_NUMBER,
	num
});

export const resetGame = () => ({
	type: RESET_GAME
});