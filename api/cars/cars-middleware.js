const db = require('./cars-model')


const checkCarId = async (req, res, next) => {
  try{
    const car = await db.getById(req.params.id);
    if(!car){
        res.status(400).json({message: "not found"})
    }else {
        req.car = car;
        next();
    }

}catch(err){
    next(err)
}
}

const checkCarPayload = (req, res, next) => {
  if(!req.body.vin) return next({
    status: 404,
    message:  'vin is missing'
  })
  if(!req.body.name) return next({
    status: 404,
    message:  'name is missing'
  })
  if(!req.body.make) return next({
    status: 404,
    message:  'make is missing'
  })
  if(!req.body.mileage) return next({
    status: 404,
    message:  'mileage is missing'
  }) 
  next()
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid
}