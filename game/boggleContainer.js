import React from 'react';
import { connect } from 'react-redux';
import { updateWord, resetWord } from '../actions/wordActions';
import { updateScore } from '../actions/scoreActions';
import { resetBoard, updateRound } from '../actions/boardActions';
import Boggle from './boggle';

const mapStateToProps = ({ board, word, score }) => { 
    return {
        board: board.currentBoard, 
        word: word.currentWord, 
        score: score.currentScore
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateWord: (newWord) => dispatch(updateWord(newWord)),
        resetWord: () => dispatch(resetWord()),
        updateScore: (newScore) => dispatch(updateScore(newScore)),
        resetBoard: () => dispatch(resetBoard()),
        updateRound: () => dispatch(updateRound())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Boggle);