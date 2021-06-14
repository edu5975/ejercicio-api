const express = require('express');
const router = express.Router();

const estadoController = require('../controller/estadoController');
const nacionalidadController = require('../controller/nacionalidadController');

router.get('/', (request, response) => {
    response.json({ info: 'Ejercicio API con postgres y Node.js' })
})

router.get('/estado', estadoController.getAllEstado);
router.get('/estado/:estadoid', estadoController.getOneEstado);
router.post('/estado', estadoController.postEstado);
router.put('/estado/:estadoid', estadoController.putEstado);
router.delete('/estado/:estadoid', estadoController.deleteEstado);

router.get('/nacionalidad', nacionalidadController.getAllNacionalidad);
router.get('/nacionalidad/:nacionalidadid', nacionalidadController.getOneNacionalidad);
router.post('/nacionalidad', nacionalidadController.postNacionalidad);
router.put('/nacionalidad/:nacionalidadid', nacionalidadController.putNacionalidad);
router.delete('/nacionalidad/:nacionalidadid', nacionalidadController.deleteNacionalidad);

module.exports = router;