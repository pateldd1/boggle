import React from 'react';

const Word = props => {
    const { currentWord } = props;

    return (
        <div className="word-area">
            <div className="current-header">
                {props.label}
            </div>
            <div className="current-word">
                {currentWord}
            </div>
        </div>
    );
};

export default Word;
