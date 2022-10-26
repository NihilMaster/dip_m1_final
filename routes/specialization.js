var express = require('express');
var router = express.Router();
const specializationsController = require('../controllers').specializationsController;

router.get('/list', specializationsController.list);

module.exports = router;