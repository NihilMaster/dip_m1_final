var express = require('express');
var router = express.Router();
const specializationController = require('../controllers').specializationController;

router.get('/list', specializationController.list);

module.exports = router;