export default class RivetsBinders {
    static init() {
        rivets.binders.title = (el, value) => {
            if (el && value) {
                el.title = value;
            }
        }

        rivets.binders.id = (el, value) => {
            if (el && value) {
                el.id = value;
            }
        }

        rivets.binders.event = (el, value) => {
            if (el && value) {
                el.setAttribute('event-data', JSON.stringify(value));
            }
        }

        rivets.binders.remove = (el, removeIcon) => {
            if (removeIcon) {
                el.remove();
            }
        }

        rivets.binders.model = (el, model) => {
            if (model) {
                el.setAttribute('model', JSON.stringify(model));
            }
        }
    }
}