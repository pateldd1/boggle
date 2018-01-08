import { merge } from 'lodash';
import Board from '../utils/initializeBoard';
const board = new Board();

const defaultState = {
    currentBoard: board.grid,
    roundStarted: true
};

const BoardReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case 'CHANGE_BOARD':
            return Object.assign({}, state, { currentBoard: action.newBoard });
        case 'RESET_BOARD':
            let freshBoard = new Board();
            return Object.assign({}, state, { currentBoard: freshBoard.grid });
        case 'UPDATE_ROUND': 
            return Object.assign({}, state, { roundStarted: !state.roundStarted });
        default:
            return state;
    }
};

export default BoardReducer;