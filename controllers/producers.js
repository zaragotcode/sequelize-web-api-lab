const { Producer } = require("../models")

const create = async (req, res) => {
  try {
    const producer = await Producer.create(req.body)
    res.status(200).json(producer)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create
}