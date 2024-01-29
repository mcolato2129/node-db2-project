// DO YOUR MAGIC
const express = require('express');
const Cars = require('./cars-model');
const mw = require('./cars-middleware')

const router = express.Router()

router.get('/',mw.checkCarId, (req, res, next)=> {
  res.json(req.cars)
})

router.get('/:id', async (req, res, next)=> {
    res.json(`get car ${req.params.id}`);
})

router.post('/', async (req, res, next)=> {
    res.json('post new car'); 
})



module.exports = router;