import * as actions from './hacactions';

describe('submitNumber', () => {
    it('Should return the action', () => {
        const action = actions.submitNumber(50);

        expect(action.type).toEqual(actions.SUBMIT_NUMBER);
        expect(action.num).toEqual(50);
    });
});

describe('resetGame', () => {
    it('should return the action', () => {
        const action = actions.resetGame();

        expect(action.type).toEqual(actions.RESET_GAME);
    });
});