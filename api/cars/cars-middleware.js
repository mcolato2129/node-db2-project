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