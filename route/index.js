const getMonkeysMW = require('../middleware/monkey/getMonkeys');
const getMonkeyMW = require('../middleware/monkey/getMonkey');
const createMonkeyMW = require('../middleware/monkey/createMonkey');
const updateMonkeyMW = require('../middleware/monkey/updateMonkey');
const deleteMonkeyMW = require('../middleware/monkey/deleteMonkey');
const deleteMonkeyBananasMW = require('../middleware/monkey/deleteMonkeyBananas');
const getBananasMW = require('../middleware/banana/getBananas');
const getBananaMW = require('../middleware/banana/getBanana');
const createBananaMW = require('../middleware/banana/createBanana');
const updateBananaMW = require('../middleware/banana/updateBanana');
const deleteBananaMW = require('../middleware/banana/deleteBanana');
const checkMonkeyIdMW = require('../middleware/banana/checkMonkeyId');
function addRoutes(app) {
    const monkeys = [
        { id: 1, name: 'Joe', sex: 'male', species: 'gibbon' },
        { id: 2, name: 'Josephine', sex: 'female', species: 'gorilla' },
        { id: 3, name: 'Lajos', sex: 'male', species: 'orangutan' }
    ];
    const bananas = [
        { id: 1, color: 'yellow', sweet: false, monkeyId: null },
        { id: 2, color: 'yellow', sweet: true, monkeyId: null },
        { id: 3, color: 'green', sweet: true, monkeyId: null },
        { id: 4, color: 'green', sweet: false, monkeyId: null }
    ];
    const objRep = {
        monkeys,
        bananas,
        nextMonkeyId: monkeys.length + 1,
        nextBananaId: bananas.length + 1
    };
    app.get('/monkey', getMonkeysMW(objRep), (req, res, next) => res.status(200).json(res.locals.monkeys));
    app.get('/monkey/:id', getMonkeyMW(objRep), (req, res, next) => res.status(200).json(res.locals.monkey));
    app.post('/monkey', createMonkeyMW(objRep), (req, res, next) => res.status(201).json(res.locals.monkey));
    app.patch('/monkey/:id', getMonkeyMW(objRep), updateMonkeyMW(objRep), (req, res, next) => res.status(200).json(res.locals.monkey));
    app.delete('/monkey/:id', getMonkeyMW(objRep), deleteMonkeyBananasMW(objRep), deleteMonkeyMW(objRep), (req, res, next) => res.status(200).json(res.locals.monkey));
    app.get('/banana', getBananasMW(objRep), (req, res, next) => res.status(200).json(res.locals.bananas));
    app.get('/banana/:id', getBananaMW(objRep), (req, res, next) => res.status(200).json(res.locals.banana));
    app.post('/banana', checkMonkeyIdMW(objRep), createBananaMW(objRep), (req, res, next) => res.status(201).json(res.locals.banana));
    app.patch('/banana/:id', getBananaMW(objRep), checkMonkeyIdMW(objRep), updateBananaMW(objRep), (req, res, next) => res.status(200).json(res.locals.banana));
    app.delete('/banana/:id', getBananaMW(objRep), deleteBananaMW(objRep), (req, res, next) => res.status(200).json(res.locals.banana));
}
module.exports = addRoutes;