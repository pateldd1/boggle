exports.updateWord = (newWord) => {
    return function (dispatch) {
        return dispatch(changeWord(newWord));
    };
};

exports.resetWord = () => {
    return function (dispatch) {
        return dispatch(reset());
    };
};

const changeWord = (newWord) => {
    return {
        type: 'CHANGE_WORD',
        newWord: newWord
    };
};

const reset = () => {
    return {
        type: 'RESET_WORD'
    };
};