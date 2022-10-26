var express = require('express');
var router = express.Router();
const illnessesController = require('../controllers').illnessesController;

router.get('/list', illnessesController.list);
//router.get('/list/:id', illnessesController.getById);
router.post('/', illnessesController.add);
router.put('/:id', illnessesController.update);
//router.delete('/:id', illnessesController.delete);

module.exports = router;