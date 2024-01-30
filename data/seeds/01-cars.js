// STRETCH
const cars = [
    {
        vin: 'JM1GJ1W52F1221221',
        make: 'Nissan',
        model:'Altima',
        mileage: 115000,
        title: 'clean',
        transmission: 'manuel'
    },
    {
        vin: '1FMDU32P5V2067098',
        make: 'Nissan',
        model:'GTR',
        mileage: 50000,
        title: 'clean',
    },
    {
        vin: '1FAFP55U11G281724',
        make: 'Chevrolet',
        model:'Corvette',
        mileage: 15000,
    }
]
exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}