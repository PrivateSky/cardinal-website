import BindableController from "./../base-controllers/BindableController.js";
import entities from "./candidates/candidates.js";

let currentView = JSON.parse(JSON.stringify(entities[0]));
let entitiesModel = JSON.parse(JSON.stringify(entities));

export default class RenderListController extends  BindableController {
    constructor(element) {
        super(element);
        this.model = this.setModel({entities:entitiesModel, current:currentView, search:{value:""}});

        this.model.onChange("search.value",()=>{
            let searchedString = this.model.getChainValue("search.value");
            let searchedEntities = entities.filter((entitity)=>{
                return entitity.name.includes(searchedString);
            });

            console.log(searchedEntities);
            this.model.setChainValue("entities", JSON.parse(JSON.stringify(searchedEntities)));

        });

        element.addEventListener("changeView",  (evt) =>{
            evt.stopImmediatePropagation();

            let id = evt.data;
            let selected = entities.find(el=>el.id.toString() === id.toString());
            this.model.setChainValue("current", JSON.parse(JSON.stringify(selected)));

        })
    }
}