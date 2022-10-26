var express = require('express');
var router = express.Router();
const illnessesController = require('../controllers').illnessesController;

router.get('/list', illnessesController.list);
router.get('/list/:id', doctorsController.getById);
router.post('/', doctorsController.add);
router.put('/:id', doctorsController.update);
router.delete('/:id', doctorsController.delete);

module.exports = router;