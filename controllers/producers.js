const { Producer, Placement } = require("../models")

const create = async (req, res) => {
  try {
    const producer = await Producer.create(req.body)
    res.status(200).json(producer)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const producer = await Producer.findAll()
    res.status(200).json(producer)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const producer = await Producer.findByPk(req.params.id)
    producer.set(req.body)
    await producer.save
    res.status(200).json(producer)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteProducer = async (req, res) => {
  try {
    const producer = await Producer.findByPk(req.params.id)
    await producer.destroy()
    res.status(200).json(producer)
  } catch (error) {
    res.status(500).json(error)
  }
}

const addPlacement = async (req, res) => {
  try {
    req.body.producerId = req.params.id
    const placement = await Placement.create(req.body)
    res.status(200).json(placement)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  update,
  delete: deleteProducer,
  addPlacement
}