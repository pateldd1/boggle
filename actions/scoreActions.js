exports.updateScore = (newScore) => {
    return function (dispatch) {
        return dispatch(changeScore(newScore));
    };
};

const changeScore = (newScore) => {
    return {
        type: 'CHANGE_SCORE',
        newScore: newScore
    };
};