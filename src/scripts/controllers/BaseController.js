import PskModel from "./PskModel.js";
export default class BaseController{

    constructor(element){
        this._element = element;
        this.setModel = PskModel.setModel;
    }

}