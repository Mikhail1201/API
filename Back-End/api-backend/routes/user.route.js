const express = require('express');
const userController = require('../controllers/user.controllers.js');
const User = require('../models/user.model.js');
const router = express.Router();

router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
