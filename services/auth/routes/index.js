const express = require('express');
const router = express.Router();
// Mount sub-routes
router.use('/users', require('./user.route'));

module.exports = router;