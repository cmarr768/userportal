import request from 'superagent';

const DataService = store => next => action => {
    next(action);
    switch (action.type) {
        case 'GET_IMGUR_MOCK_DATA':
            request
                .get('src/data/imgurData.json')
                .end((err, res) => {
                    if (err) {
                        return next({
                            type: 'GET_IMGUR_DATA_ERROR',
                            err
                        });
                    }
                    const data = JSON.parse(res.text).data;
                    next({
                        type: 'GET_IMGUR_DATA_RECEIVED',
                        data
                    });
                });
            break;
        default:
            break;
    }

};

export default DataService;