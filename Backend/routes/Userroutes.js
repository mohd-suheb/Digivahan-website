const express = require('express');

const {userregister,  loginuser } = require('../controller/Usercontroller');

const router = express.Router();
router.post('/register', userregister);
router.post('/login', loginuser);


module.exports = router;