const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/login.controller');
const verifyToken=require('../middlewares/login.middleware')

router.post('/register', register);
router.post('/login', login);

module.exports = router;
