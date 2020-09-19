var router = require("express-promise-router")();

const userController = require('../controllers/user.controller')

/* GET users listing. */
router.get('/', userController.All);

/* GET a single user */
router.get('/:id', userController.get);

/* Create a new user */
router.post('/', userController.create);

/* Update */
router.patch('/:id', userController.update);

router.delete('/:id', userController.remove);

module.exports = router;
