var router = require("express-promise-router")();

const  {userFormRequest} = require('../middlewares/form-request/user')
const { hasPermissions } = require('../middlewares/auth');
const userController = require('../controllers/user.controller')

/* GET users listing. */
router.get('/', hasPermissions(['view any user', 'view user']),userController.All);

/* GET a single user */
router.get('/:id', hasPermissions(['view user']),userController.get);

/* Create a new user */
router.post('/', hasPermissions(['create user']) && userFormRequest('createUser'), userController.create);

/* Update */
router.patch('/:id', hasPermissions(['update user']), userController.update);

router.delete('/:id', hasPermissions(['remove user']),userController.remove);

module.exports = router;
