var router = require("express-promise-router")();

const  {authFormRequest} = require('../../middlewares/form-request/auth')
const authController = require('../../controllers/auth.controller')

/* GET users listing. */
router.post('/login', authController.login);
router.post('/signup',authFormRequest('createUser'), authController.signup);

module.exports = router;
