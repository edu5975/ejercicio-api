const express = require('express');
const router = express.Router();

const estadoController = require('../controller/estadoController');

router.get('/estado', estadoController.getAllEstado);
router.get('/estado/:id', estadoController.getOneEstado);
router.post('/estado', estadoController.postEstado);
router.put('/estado/:id', estadoController.putEstado);
router.delete('/estado/:id', estadoController.deleteEstado);

module.exports = router;