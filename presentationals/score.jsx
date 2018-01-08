import React from 'react';
import WordList from './wordList';

const Score = props => {

    const { wordScoreList } = props;

    return (
        <div className="score-box">
            <WordList
                wordScoreList={wordScoreList}
            />
        </div>
    );
};

export default Score;