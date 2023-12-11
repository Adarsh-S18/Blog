const express = require('express');
const { loginAdmin } = require('../Controllers/authController');
const router = express.Router();


router.post('/login', loginAdmin)

module.exports = router;

