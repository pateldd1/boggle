import { DICE } from './dice';
import Tile from './tile';

export default class Board {
    constructor() {
        this.grid = this.initializeBoard();
    }

    initializeBoard() {
        let letters = [];
        DICE.forEach((die) => {
            const randIdx = Math.floor(Math.random() * 6);
            letters.push(die[randIdx]);
        });
        let cols;
        let rows = [];
        let letter;
        for (let row = 0; row < 5; row++) {
            cols = [];
            for (let col = 0; col < 5; col++) {
                letter = letters.shift();
                cols.push(
                    new Tile(letter, [row, col], false)
                );
            }
            rows.push(cols);
        }
        return rows;
    }
}