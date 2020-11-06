const router = require('express').Router();

const UserController = require('@controllers/UserController.js');


router.get('/', UserController.index);


module.exports = router;