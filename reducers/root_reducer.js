
import { combineReducers } from 'redux';
import BoardReducer from './boardReducer';
import WordReducer from './wordReducer';
import ScoreReducer from './scoreReducer';

const rootReducer = combineReducers({
    board: BoardReducer,
    word: WordReducer,
    score: ScoreReducer
});

export default rootReducer;