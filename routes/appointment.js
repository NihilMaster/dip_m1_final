var express = require('express');
var router = express.Router();
const appointmentsController = require('../controllers').appointmentsController;

router.get('/list', appointmentsController.list);
router.get('/list/:id', appointmentsController.getById);
router.get('/listJ', appointmentsController.listJoin);
router.post('/', appointmentsController.add);
router.put('/:id', appointmentsController.update);
router.delete('/:id', appointmentsController.delete);

module.exports = router;