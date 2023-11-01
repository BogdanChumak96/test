const Router = require('express');
const router = new Router();
const controller = require('./authcontroller'); // Добавлено

router.post('/registration', controller.registration);
router.post('/login', controller.login);
router.get('/users', controller.getUsers);

module.exports = router;