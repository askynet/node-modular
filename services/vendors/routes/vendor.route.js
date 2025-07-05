const express = require('express');
const { getVendor } = require('../controllers/vendors.controller');
const router = express.Router();

router.get('/:id', getVendor);

module.exports = router;