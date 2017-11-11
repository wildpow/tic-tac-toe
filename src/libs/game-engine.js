"use strict";
import { WinCondition } from './win-conditions';
import { createSquare } from './map';

export class GameEngine {
    constructor(symbols, lastWinner) {
        if (!symbols || symbols.length !==2) throw Error('A game must be made of two symbols');
        this.turnOf = (lastWinner) ? lastWinner : (Math.round(Math.random()) === 0) ? symbols[0] : symbols[1];
        this.symbols = symbols;
        this.field = createSquare(3);
        this.winCondition = new WinCondition(this.field);
    }
    isOutBounds(coords) {
        if (!coords || typeof coords.row !== "number" || typeof coords.column !== "number") return true;
        return coords.row > 3 || coords.row < 0 || coords.column > 3 || coords.column < 0;
    }

    isTurnOf(symbol) {
        return this.turnOf === symbol;
    }

    toggleTurn() {
        return this.turnOf = (this.turnOf === this.symbols[0]) ? this.symbols[1] : this.symbols[0];
    }

    occupyField(coords) {
        if (this.isOutBounds(coords)) return false;

        let slot = this.field[coords.row][coords.column];
        if (slot.occupied) return false;

        slot.occupied = true;
        slot.symbol = this.turnOf;
        return slot;
    }
    get isWinner() { return this.winCondition.hasLine(this.turnOf) }
    get isTie() { return this.winCondition.tieExists; }
}