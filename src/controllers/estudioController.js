const mongoose = require('mongoose')
const Estudio = require('../models/estudio')

//{GET}
const getAll= async (req, res) => {
    const estudios = await Estudio.find()
    res.json(estudios)
  }

  //{GET}
  const getById = async (req, res) => {
    const estudio = await Estudio.find()
    const idRequerido = req.params.id
    const estudiosFiltrados =  estudio.filter(titulo => titulo.id == idRequerido )
    res.status(200).send(estudiosFiltrados)
  }

  //{POST}
  const createStudio = async (req, res) => {
    const estudio = new Estudio({
     _id: new mongoose.Types.ObjectId(),
     nome: req.body.nome,
     criadoEm: req.body.criadoEm,
   })
   const estudioJaExiste = await Estudio.findOne({nome: req.body.nome})
   if (estudioJaExiste) {
     return res.status(409).json({error: 'Estudio ja cadastrado.'})
   }
   try{
     const novoEstudio = await estudio.save()
     res.status(201).json(novoEstudio)
   } catch(err) {
     res.status(400).json({ message: err.message})
   }
 }

 //{PATCH}
 const updateOne = async (req, res) =>{

try{

const estudio = await Estudio.findById(req.params.id)
if (estudio == null){
    return res.status(404).json({message: "Estudio não encontrado"})
}

if (req.body.nome != null){
    estudio.nome = req.body.nome
}

const estudioAtualizado = await estudio.save()
res.status(200).json(estudioAtualizado)

} catch (err){
    res.status(500).json({message: err.message})
}
 }
//{DELETE}
 const studioDelete = async (req, res) =>{

  const estudio = await Estudio.findById(req.params.id)
  if (estudio == null){
    return res.status(404).json({message: "Estudio não encontrado"})
  
  }
  try{
    await estudio.remove()
    res.status(200).json({message: "Estudio deletado com sucesso"})
  }catch (err){
    res.status(500).json({message: err.message})
  }
  }
module.exports ={
    getAll,
    getById,
    createStudio,
    updateOne,
    studioDelete
}