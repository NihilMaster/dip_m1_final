var express = require('express');
var router = express.Router();
const specializationsController = require('../controllers').specializationsController;

router.get('/list', specializationsController.list);
//router.get('/list/:id', specializationsController.getById);
router.post('/', specializationsController.add);
router.put('/:id', specializationsController.update);
//router.delete('/:id', specializationsController.delete);

module.exports = router;