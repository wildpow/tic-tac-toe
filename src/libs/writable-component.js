import { SimpleComponent } from "./simple-component";

// writable class holds a alias prop to change the elements
export class WritableComponent extends SimpleComponent {

    constructor(selector) {
        super(selector);
    }
    // getter
    get textContent() { return this.element.textContent; }

    // setter
    set textContent(v) {
        return this.element.textContent = v;
    } 
}