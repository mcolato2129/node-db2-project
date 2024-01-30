// DO YOUR MAGIC
const express = require('express');
const Cars = require('./cars-model');
const mw = require('./cars-middleware')

const router = express.Router()

router.get('/', async (req, res, next)=> {
  const cars = await Cars.getAll(req.params.id)
  res.json(cars) 
})

router.get('/:id', mw.checkCarId, async (req, res, next)=> {
    res.json(req.car)
})

router.post('/', mw.checkCarPayload, mw.checkVinNumberValid , mw.checkVinNumberUnique , async (req, res, next) => {
 try{
    const car = await Cars.create(req.body)
    res.json(car); 
 }catch(err){
    next(err)
 }
})

 

module.exports = router;