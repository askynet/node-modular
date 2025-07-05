const express = require('express');
const router = express.Router();
// Mount sub-routes
router.use('/vendors', require('./vendor.route'));

module.exports = router;