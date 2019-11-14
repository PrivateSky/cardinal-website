import AbstractController from './AbstractController.js';

export default class SomeController extends AbstractController {
    constructor(element) {
        super(element);
    }

    setState(newState) {
        console.log('setter', newState);
        this._state = newState;
    }

    getState() {
        console.log('getter', this._state);
        return this._state;
    }
}