var router = require("express-promise-router")();

const authController = require('../controllers/auth.controller')

/* GET users listing. */
router.post('/login', authController.login);
router.post('/signup', authController.signup);

module.exports = router;
