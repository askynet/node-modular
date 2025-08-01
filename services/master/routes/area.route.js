const express = require('express');
const { getArea } = require('../controllers/area.controller');
const router = express.Router();

router.get('/:id', getArea);

module.exports = router;