export const TENDER_CONTROLLER = {
    addItem: function(evt, model) {
        evt.preventDefault();
        evt.stopImmediatePropagation();
        if (model && model.data && model.data.cardList) {
            model.data.cardList.push(_createTestingCard());
        }
    }
};

const _createTestingCard = (name, active, receiveNotification, description, startDate) => {
    return {
        name: !name && '[TEST] Tender name',
        active: !active && Math.random() < 0.5,
        description: !description && `This is a description for tender -- `,
        receiveNotification: !receiveNotification && Math.random() < 0.5,
        startDate: !startDate && new Date().toJSON().slice(0, 10)
    }
}