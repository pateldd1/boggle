import React from 'react';
import ReactDOM from 'react-dom';
import Score from '../presentationals/score';
import Board from '../presentationals/board';
import Button from '../presentationals/button';
import Word from '../presentationals/word';
import { DICTIONARY } from '../utils/jsonDictionary';

const WORDLENGTH_TO_POINTS = {
    0: 0,
    1: 0,
    2: 0,
    3: 1,
    4: 1,
    5: 2,
    6: 3,
    7: 5,
    8: 11
};

export default class Boggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wordScoreList: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    resetEverything() {
        this.props.resetBoard();
        this.props.resetWord();
        this.props.updateRound();
    }

    handleSubmit() { 

        if (this.state.wordScoreList[this.props.word]) {
            alert('word already submitted');
            return;
        }
        if (!DICTIONARY[this.props.word]) {
            alert('not an english word!');
            this.resetEverything();
            return;
        }
        const maxPoints = 11;
        const points = WORDLENGTH_TO_POINTS[this.props.word.length] || maxPoints;
        let newEntry = {};
        newEntry[this.props.word] = points;
        let newList = Object.assign({}, this.state.wordScoreList, newEntry);
        this.setState({
            wordScoreList: newList
        }, () => {
            this.resetEverything();
        });
    }

    render() {    
        return (
            <div className="boggle-container">
                <div className="game-area">
                    <Board
                        board={this.props.board}
                    />
                    <Word
                        currentWord={this.props.word}
                        label={'Word'}
                    />
                    <Button
                        label={'Enter'}
                        handleSubmit={this.handleSubmit}
                    />
                </div>

                <Score
                    wordScoreList={this.state.wordScoreList}
                />

                <div className="clear" />

            </div>
        );
    }
}