import { merge } from 'lodash';

const defaultState = {
    currentWord: ''
};

const WordReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case 'CHANGE_WORD':
            return Object.assign({}, state, { currentWord: action.newWord });
        case 'RESET_WORD':
            return Object.assign({}, state, { currentWord: '' });
        default:
            return state;
    }
};

export default WordReducer;