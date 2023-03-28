const express = require('express');
const router= express.Router();
const {
    register, 
    getUser,
    editUser,
    login,
    checkEmail
} = require('../controller/userController');


router.post('/register', register)
router.post('/login', login)
router.get('/userInfo/:id', getUser)
router.post('/editUser/:id', editUser)
router.post('/checkEmail', checkEmail)


module.exports = router;