var express = require('express');
var router = express.Router();
const patientsController = require('../controllers').patientsController;

router.get('/list', patientsController.list);
router.get('/list/:id', patientsController.getById);
router.post('/', patientsController.add);
router.put('/:id', patientsController.update);
router.delete('/:id', patientsController.delete);

module.exports = router;