export class SimpleComponent {
    // creates a node element, will be base for every other component
    constructor(selector) {
        if (!selector) throw Error('a SimpleComponent must be composed of a selector');
        this.selector = selector.toString();
        this.element = document.createElement(this.selector);
    }
    // call to remove element from DOM
    destroy() {
        document.body.removeChild(this.element);
    }
}