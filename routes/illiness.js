var express = require('express');
var router = express.Router();
const illnessController = require('../controllers').illnessController;

router.get('/list', illnessController.list);

module.exports = router;