const { ObjectId } = require('mongodb');
const connection = require('./connection');

async function getBarberos() {
    const clientMongo = await connection.getConnection();
    const barberos = await clientMongo
        .db('bddbarberia')
        .collection('barbero')
        .find()
        .toArray();

    return barberos;
}

async function addBarbero(barbero) {
    const clientMongo = await connection.getConnection();
    const result = await clientMongo
        .db('bddbarberia')
        .collection('barbero')
        .insertOne(barbero);
    return result;
}

async function deleteBarbero(id) {
    const clientMongo = await connection.getConnection();
    try {
        const result = await clientMongo
            .db('bddbarberia')
            .collection('barbero')
            .deleteOne({_id: id});
        return result;
    } catch (error) {
        console.log(error);
    }
}

async function actualizarBarbero(barbero){
    const clientMongo = await connection.getConnection();

        const result = await clientMongo
        .db('bddbarberia')
        .collection('barbero')
        .updateOne({_id: barbero._id},{
            $set: barbero
        })
        }
    
module.exports = { getBarberos, addBarbero, deleteBarbero,  actualizarBarbero};
