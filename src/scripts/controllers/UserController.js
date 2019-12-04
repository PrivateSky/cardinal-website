import Controller from "./Controller.js";

export default class UserController extends Controller {

    constructor(element) {
        super(element);

        this.user = {
            name: "Rafael",
            email: "raf@rms.ro",
            birthdate:{
                day:1,
                year:1988,
                month:{
                    name:"December",
                    number:12
                }
            },
            accounts:["account 1","account 2"]
        };

        this.setModel(this.user);
        console.log(this.model);
        setTimeout(() => {

            this.model.onChange("*", (chain) => {
                console.log("Chain changed: ", chain)
            });


            this.model.onChange("address.city.street.number", () => {
                console.log("city number changed");
            });

            this.model.onChange("address", () => {
                console.log("address changed");
            });


            this.model.address = {
                city: {
                    name: "Iasi",
                    street: {name:"Chimiei",
                        number:"2"}
                },
                country: "Romania"
            };

            this.model.birthdate.day=2;
            this.model.birthdate.month.number=11;

            setTimeout((() => {
                this.model.address.city.street.number = "2bis";
            }), 2000);

            setTimeout((() => {
                this.model.accounts.push("master account")
            }), 4000);

        }, 2000)


    }
}