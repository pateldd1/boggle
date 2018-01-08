import React from 'react';
import { connect } from 'react-redux';
import BoggleTile from './tile';
import { DICE } from '../utils/dice';
import { updateBoard, updateRound } from '../actions/boardActions';
import { updateWord } from '../actions/wordActions';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.deltas = [[0,1],[0,-1],[1,0],[-1,0],[1,1],[-1,-1],[-1,1],[1,-1]];
        this.state = {
            gameStarted: true
        };
    }

    initializeBoard() {
        let rows = [];
        let { board } = this.props;
        board.forEach((row, i) => {
            let cols = [];
            row.forEach((col, j) => {
                let tile = col;
                cols.push(
                    <BoggleTile
                        key={`col-${j}`}
                        letter={tile.letter}
                        pos={tile.pos}
                        selected={tile.selected}
                        handleClick={this.handleClick}
                    />
                );
            });
            rows.push(
                <div className="row" key={`row-${i}`}>
                    {cols}
                </div>
            );
        });

        return (
            <div className="orange-area">
                {rows}
            </div>
        );
    }

    offBoard(row, col) {
        if (row >= this.props.board.length || row < 0) {
            return true;
        }
        if (col >= this.props.board[0].length || col < 0) {
            return true;
        }
        return false;
    }

    validMove(row, col) {
        if (this.props.roundStarted) {
            return true;
        }
        if (this.props.board[row][col].selected) {
            return true;  
        }
        let delta, deltaRow, deltaCol, checkRow, checkCol;
        let allowPlay = false;
        if (!this.props.roundStarted) {
            for (let index = 0; index < this.deltas.length; index++) {
                delta = this.deltas[index];
                deltaRow = delta[0];
                deltaCol = delta[1];
                checkRow = row + deltaRow;
                checkCol = col + deltaCol;
                if (this.offBoard(checkRow, checkCol)) {
                    continue;
                }
                if (this.props.board[checkRow][checkCol].selected) {
                    allowPlay = true;
                    break;
                }
            }
        }
        return allowPlay;
    }

    handleClick(pos) {
        const row = pos[0];
        const col = pos[1];
     
        if (!this.validMove(row, col)) {
            alert('must click an adjacent tile');
            return;
        }

        const letter = this.props.board[row][col].letter;
        const selected = this.props.board[row][col].selected;
        
        let newBoard = this.props.board.slice(0);
        
        let newWord = this.props.word.slice(0);

        if (selected && letter === this.props.word[this.props.word.length-1]) {
            newWord = newWord.slice(0, -1);
            newBoard[row][col].selected = false;
        }
        if (!selected) {
            newWord = newWord.concat(letter);
            newBoard[row][col].selected = true;
        }
        this.props.updateBoard(newBoard);
        this.props.updateWord(newWord);
        if (this.props.roundStarted) {
            this.props.updateRound();
        }
    }

    render () {
        return this.initializeBoard();
    }
}

const mapStateToProps = ({ board, word }) => {
    return { 
        board: board.currentBoard,
        word: word.currentWord,
        roundStarted: board.roundStarted 
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateBoard: (newBoard) => dispatch(updateBoard(newBoard)),
        updateWord: (newWord) => dispatch(updateWord(newWord)),
        updateRound: () => dispatch(updateRound()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);