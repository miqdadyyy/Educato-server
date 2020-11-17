const express = require('express');
const router = express.Router();
const AuthService = require('../../services/authentication');

router.post('/login', AuthService.login);

module.exports = router;
