const router = require('express').Router()
const prodCtrl = require('../controllers/producers.js')

// routes

router.post('/', prodCtrl.create)
// router.get('/', prodCtrl.index)
// router.put('/:id', prodCtrl.update)
// router.delete('/:id', prodCtrl.delete)
// router.post('/:id/placements', prodCtrl.addPlacement)
module.exports = router