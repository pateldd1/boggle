exports.updateBoard = (newBoard)  => {
    return function(dispatch) {
        return dispatch(changeBoard(newBoard));
    };
};

exports.resetBoard = ()  => {
    return function(dispatch) {
        return dispatch(reset());
    };
};

exports.updateRound = ()  => {
    return function(dispatch) {
        return dispatch(round());
    };
};

const changeBoard = (newBoard) => {
    return {
        type: 'CHANGE_BOARD',
        newBoard: newBoard
    };
};

const reset = () => {
    return {
        type: 'RESET_BOARD'
    };
};

const round = () => {
    return {
        type: 'UPDATE_ROUND'
    };
};