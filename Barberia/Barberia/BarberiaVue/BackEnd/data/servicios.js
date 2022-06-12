const { ObjectId } = require('mongodb');
const connection = require('./connection');


async function getServicios() {
    const clientMongo = await connection.getConnection();
    const servicios = await clientMongo
        .db('bddbarberia')
        .collection('servicios')
        .find()
        .toArray();

    return servicios;
}
async function deleteServicio(id) {
    const clientMongo = await connection.getConnection();
    try {
        const result = await clientMongo
            .db('bddbarberia')
            .collection('servicios')
            .deleteOne({ _id: ObjectId(id._id) });
        return result;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getServicios, deleteServicio};