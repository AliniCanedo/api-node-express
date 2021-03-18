const express = require('express')
const router = express.Router()
const produtoController =   require('../controllers/produto.controller');
// Retrieve all produtos
router.get('/', produtoController.findAll);
// Create a new produto
router.post('/', produtoController.create);
// Retrieve a single produto with id
router.get('/:id', produtoController.findById);
// Update a produto with id
router.put('/:id', produtoController.update);
// Delete a produto with id
router.delete('/:id', produtoController.delete);
module.exports = router