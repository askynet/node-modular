const express = require('express');
const { getQuestion } = require('../controllers/questions.controller');
const router = express.Router();

router.get('/:id', getQuestion);

module.exports = router;