const Imgur = (state = [], action) => {
    switch (action.type) {
        case 'GET_IMGUR_DATA_RECEIVED':
            return action.data
        default:
            return state
    }
};

export default Imgur;