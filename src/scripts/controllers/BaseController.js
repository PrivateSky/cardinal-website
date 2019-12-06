import PskBindableModel from "./PskBindableModel.js";
export default class BaseController{

    constructor(element){
        this._element = element;
        this.setModel = PskBindableModel.setModel;
    }

}