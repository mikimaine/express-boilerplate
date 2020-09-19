var router = require("express-promise-router")();

const { passport } = require('../middlewares/auth');
const userController = require('../controllers/user.controller')

/* GET users listing. */
router.get('/', passport(['view any user']),userController.All);

/* GET a single user */
router.get('/:id', passport(['view user']),userController.get);

/* Create a new user */
router.post('/', passport(['create user']), userController.create);

/* Update */
router.patch('/:id', passport(['update user']), userController.update);

router.delete('/:id', passport(['remove user']),userController.remove);

module.exports = router;
