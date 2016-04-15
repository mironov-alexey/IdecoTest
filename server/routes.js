'use strict';
const pages = require('./controllers/pages');
const flightController = require('./controllers/flight');
const Flight = require('./models/flight');

module.exports = function (app) {
    app.get('/', pages.index);

    app.get('/api/flights', flightController.apiList);

    app.get('/flights', flightController.list);
    app.post('/flights', flightController.create);
    app.put('/flights', flightController.edit);

    app.all('*', pages.error404);

    /* eslint no-unused-vars: 0 */
    /* eslint max-params: [2, 4] */
    app.use((err, req, res, next) => {
        console.error(err);

        res.sendStatus(500);
    });
};