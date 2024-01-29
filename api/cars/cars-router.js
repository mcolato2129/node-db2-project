// DO YOUR MAGIC
const express = require('express');
const Cars = require('./cars-model');
const mw = require('./cars-middleware')

const router = express.Router()

router.get('/', mw.checkCarId, (req, res, next)=> {
  res.json(req.car)
})

router.get('/:id', mw.checkCarId, async (req, res, next)=> {
    res.json(req.car)
})

router.post('/', mw.checkCarPayload, mw.checkCarPayload, mw.checkVinNumberValid ,mw.checkVinNumberUnique, async (req, res, next) => {
 res.json('post new car'); 
})



module.exports = router;