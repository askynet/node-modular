const express = require('express');
const router = express.Router();
// Mount sub-routes
router.use('/areas', require('./area.route'));

module.exports = router;