const express = require('express')
const router = express.Router()
const controller = require('../controllers/tituloController')

//listar todos os titulos da Marvel
router.get('/marvel', controller.getAllMarvel)

//listar todos os títulos da Disney
router.get('/disney', controller.getAllDisney)

//listar todos os titulos da warner bros.
router.get('/warnerbros', controller.getAllWarnerBros)

//listar um titulo/get/findById
router.get('/:id', controller.getById)

//listar todos os titulos/get/find
router.get('/', controller.getAll)

//criar um novo titulo/post/save
router.post('/', controller.createTitle)

//atualizar uma informacao especifica num titulo/patch/findById/save
router.patch('/:id', controller.updateOne)

//deletar um titulo/delete/findById/remove
router.delete('/:id',controller.titleDelete )
module.exports = router