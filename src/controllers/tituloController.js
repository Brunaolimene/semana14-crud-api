const mongoose = require('mongoose')
const Titulo = require('../models/titulo')

//{GET}
const getAllMarvel = async (req, res) =>{
     const titulos = await Titulo.find().populate('estudio')
     const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome == "Marvel")
     res.json(titulosFiltrados)
}

//{GET}
const getAllDisney = async (req, res) =>{
  const titulos = await Titulo.find().populate('estudio')
  const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome == "Disney")
  res.json(titulosFiltrados)
}

//{GET}
const getAllWarnerBros = async (req, res) =>{
  const titulos = await Titulo.find().populate('estudio')
  const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome == "Warner Bros.")
  res.json(titulosFiltrados)
}

//{GET}
const getById = async (req, res) => {
  const titulos = await Titulo.find()
  const idRequerido = req.params.id
  const titulosFiltrados =  titulos.filter(titulo => titulo.id == idRequerido )
  res.status(200).send(titulosFiltrados)
}

//{GET}
const getAll = async (req, res) => {
    const titulos = await Titulo.find().populate('estudio')
    res.status(200).json(titulos)
  }

//{POST}
const createTitle = async (req, res) => {
    const titulo = new Titulo({
      _id: new mongoose.Types.ObjectId(),
      nome: req.body.nome,
      genero: req.body.genero,
      descricao: req.body.descricao,
      estudio: req.body.estudio,
      criadoEm: req.body.criadoEm
    })
  //TODO: criar validação se filme já existe
  const tituloJaExiste = await Titulo.findOne({nome: req.body.nome})
  if (tituloJaExiste) {
    return res.status(409).json({error: 'Título já cadastrado.'})
  }
    try {
      const novoTitulo = await titulo.save()
      res.status(201).json(novoTitulo)
    } catch (err) {
      res.status(400).json({ message: err.message})
    }
  }

//{PATCH}
const updateOne = async (req, res) =>{

    try{
    
    const titulo = await Titulo.findById(req.params.id)
    if (titulo == null){
        return res.status(404).json({message: "Titulo não encontrado"})
    }
    
    if (req.body.nome != null){
        titulo.nome = req.body.nome
    }
    if (req.body.genero != null){
        titulo.genero = req.body.genero
    }
    if (req.body.descricao != null){
      titulo.descricao = req.body.descricao
  }
  if (req.body.estudio != null){
    titulo.estudio = req.body.estudio
}
    
    const tituloAtualizado = await titulo.save()
    res.status(200).json(tituloAtualizado)
    
    } catch (err){
        res.status(500).json({message: err.message})
    }
     }
//{DELETE}

const titleDelete = async (req, res) =>{

const titulo = await Titulo.findById(req.params.id)
if (titulo == null){
  return res.status(404).json({message: "Título não encontrado"})

}
try{
  await titulo.remove()
  res.status(200).json({message: "Título deletado com sucesso"})
}catch (err){
  res.status(500).json({message: err.message})
}
}
 

module.exports = {
  getAllMarvel,
  getAllDisney,
  getAllWarnerBros,
  getById,
    getAll,
    createTitle,
    updateOne,
    titleDelete 
}