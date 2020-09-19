var router = require("express-promise-router")();

const authController = require('../controllers/auth.controller')

/* GET users listing. */
router.post('/login', authController.login);


module.exports = router;
