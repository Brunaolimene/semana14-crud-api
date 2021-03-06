const express = require('express')
const router = express.Router()
const controller = require('../controllers/estudioController')


//listar todos os estudios/get/find
router.get('/', controller.getAll)

//criar um novo estudio/post/save
router.post('/', controller.getAll )
 
//listar um estudio/get/findById
router.get('/:id', controller.getById)

//atualizar uma informacao especifica num estudio/patch/findById/save
router.patch('/:id', controller.updateOne)

//deletar um estudio/delete/findById/remove
router.delete('/:id', controller.studioDelete)
module.exports = router