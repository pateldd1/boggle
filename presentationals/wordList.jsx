import React from 'react';
import Total from './total';

const WordList = props => {
    const { wordScoreList } = props;
    const words = Object.keys(wordScoreList);
    const scores = Object.values(wordScoreList);

    const wordList = words.map(function (word, index) {
        return (<li key={index}>{word}</li>);
    });

    const scoreList = scores.map(function (score, index) {
        return (<li key={index}>{score}</li>);
    });

    const total = scores.reduce(function (totalScore, currentScore) {
        return totalScore + currentScore;
    }, 0);

    return (
        <div>
            <div className="word-list">
                <div className="words">
                    <h2>WORD</h2>
                    {wordList}
                </div>
                <div className="scores">
                    <h2>SCORE</h2>
                    {scoreList}
                </div>
            </div>
            <Total
                total={total}
            />
        </div>
    );
};

export default WordList;
