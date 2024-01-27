// STRETCH
const cars = [
    {
        vin: '3333333333333',
        make: 'Nissan',
        model:'Altima',
        mileage: 115000,
        title: 'clean',
        transmission: 'manuel'
    },
    {
        vin: '2222222222222',
        make: 'Nissan',
        model:'GTR',
        mileage: 50000,
        title: 'clean',
    },
    {
        vin: '11111111111111',
        make: 'Chevrolet',
        model:'Corvette',
        mileage: 15000,
    }
]
exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}