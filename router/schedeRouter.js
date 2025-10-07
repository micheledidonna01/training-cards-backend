const express = require('express');
const router = express.Router();
const schedeController = require('../controller/schedeController.js');

// index
router.get('/', schedeController.getSchede);

// show
router.get('/:id', schedeController.getScheda);

// show esercizi
router.get('/:id/esercizi', schedeController.getSchedaEsercizi);

// show esercizio
router.get('/:id/esercizi/:idesercizio', schedeController.getSchedaEsercizio);

// post
router.post('/', schedeController.createScheda);

// put
router.put('/:id', schedeController.updateScheda);

// destroy
router.delete('/:id', schedeController.deleteScheda);

module.exports = router;