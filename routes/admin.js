const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');

router.post('/add/room', adminController.addRoom );

module.exports = router;