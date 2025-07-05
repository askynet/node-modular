const express = require('express');
const router = express.Router();
// Mount sub-routes
router.use('/questions', require('./questions.route'));

module.exports = router;