import BindableController from "./../base-controllers/BindableController.js";

const entities =  [
    {   id:1,
        name:"John Pompei",
        status:{
            text: "passed",
            icon: {
                color: "#7aa354",
                name: "check-circle"
            }
        },
        notifications:1,
        profilePic:"https://randomuser.me/api/portraits/men/1.jpg",
        attachments: [
            {
                name: "SomeDocument.docx",
                size: 4545,
                type:"plain/text"
            },
            {
                name: "SomeDocument.pdf",
                size: 564,
                type:"plain/text"
            },
            {
                name: "S44omeDocument.docx",
                size: 9545,
                type:"plain/text"
            },
            {
                name: "MySecondDoc.pdf",
                size: 56374,
                type:"plain/text"
            },
            {
                name: "S44omeDocument.docx",
                size: 9545,
                type:"plain/text"
            },
            {
                name: "MySecondDoc.pdf",
                size: 56374,
                type:"plain/text"
            }
        ],
        description:"\n" +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum malesuada diam, ac tincidunt nibh commodo in. Etiam non justo mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed massa quis nisi condimentum porttitor non vitae enim. Cras a nisi et risus pretium auctor. Vivamus lobortis pellentesque arcu, vitae imperdiet ipsum feugiat sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas sagittis dui eros, nec consequat leo maximus nec."
    },
    {   id:2,
        name:"Marck Stevenson",
        status:{
            text: "passed",
            icon: {
                color: "#7aa354",
                name: "check-circle"
            }
        },
        profilePic:"https://randomuser.me/api/portraits/men/2.jpg",
        notifications:2,
        attachments: [
            {
                name: "S44omeDocument.docx",
                size: 9545,
                type:"plain/text"
            },
            {
                name: "MySecondDoc.pdf",
                size: 56374,
                type:"plain/text"
            },
            {
                name: "MySescondDoc.pdf",
                size: 56374,
                type:"plain/text"
            },
            {
                name: "MySsecondDoc.pdf",
                size: 56374,
                type:"plain/text"
            }
        ],
        description:"\n" +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum malesuada diam, ac tincidunt nibh commodo in. Etiam non justo mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed massa quis nisi condimentum porttitor non vitae enim. Cras a nisi et risus pretium auctor. Vivamus lobortis pellentesque arcu, vitae imperdiet ipsum feugiat sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas sagittis dui eros, nec consequat leo maximus nec."
    },
    {   id:3,
        name:"Brian Derk",
        status:{
            text: "failed",
            icon: {
                color: "#FF0055",
                name: "times-circle"
            }
        },
        profilePic:"https://randomuser.me/api/portraits/men/3.jpg",
        attachments: [
            {
                name: "SomeDocument.docx",
                size: 9545,
                type:"plain/text"
            },
            {
                name: "MySecondDoc.pdf",
                size: 56374,
                type:"plain/text"
            }
        ],
        notifications:3,
        description:"\n" +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum malesuada diam, ac tincidunt nibh commodo in. Etiam non justo mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed massa quis nisi condimentum porttitor non vitae enim. Cras a nisi et risus pretium auctor. Vivamus lobortis pellentesque arcu, vitae imperdiet ipsum feugiat sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas sagittis dui eros, nec consequat leo maximus nec."
    }
];

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