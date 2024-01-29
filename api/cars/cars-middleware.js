const db = require('./cars-model')


const checkCarId = async (req, res, next) => {
  try{
    const cars = await db.getAll(req.params.id);
    
    if(!cars){
        res.status(400).json({message: "no cars found"})
    }else {
        req.cars = cars
        next()
    }

}catch(err){
    next(err)
}
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
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