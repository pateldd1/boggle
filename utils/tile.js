export default class Tile {
    constructor(letter, pos, selected = false) {
        this.letter = letter;
        this.pos = pos;
        this.selected = selected;
    }
}