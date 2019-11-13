import AbstractController from './AbstractController.js';

export default class SomeController extends AbstractController {
    constructor(element) {
        super(element);
    }

    set State(state) {
        console.log('setter', state);
        this._state = state;
    }

    get State() {
        console.log('getter', this._state);
        return this._state;
    }
}