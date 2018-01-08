import { merge } from 'lodash';

const defaultState = {
    currentScore: 0
};

const ScoreReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case 'CHANGE_SCORE':
            return Object.assign({}, state, {currentScore: action.newScore});
        default:
            return state;
    }
};

export default ScoreReducer;