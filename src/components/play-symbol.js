import { SimpleComponent } from "../libs/writable-component";
import { WritableComponent } from "../libs/writable-component";

export class PlaySybol extends WritableComponent {
    constructor() {
        super('symbol');
        this.element.setAttribute('style', 'float: right;');
    }
    set textContent(v) {
        super.textContent = `playing: ${v}`
    }
}