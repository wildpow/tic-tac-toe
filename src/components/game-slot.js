import { WritableComponent } from "../libs/writable-component";

// class responsible for visual correlation between the GameEngine and the GameHud

export class GameSlot extends WritableComponent {
    constructor(slot) {
        super('game-slot');

        this.element.setAttribute('style', "height: 60px; width: 60px; background-color: grey; display: inline-block; " +
        "border: 1px solid black; margin: 5px; font-size: large; color: black; line-height: 60px;" +
        "text-align: center; cursor: pointer");
        
        this.element.setAttribute('slot-row',slot.row);
        this.element.setAttribute('slot-column',slot.column);
        this.element.textContent = "-";
    }
    set textContent(slot) {
        super.textContent = slot.symbol;
        this.element.style.backgroundColor = 'white';
    }
}