const mongoclient = require('mongodb').MongoClient;

//TODO reemplazar variable de entorno
const uri = "mongodb+srv://admin:admin@cluster0.fsdcl.mongodb.net/?retryWrites=true&w=majority";
const client = new mongoclient(uri);

//TODO reemplazar con un singleton para generar siempre una sola conection
let instance = null;
async function getConnection(){
    if(instance == null){
        try {
            instance = await client.connect();    
        } catch (error) {
            console.log(error.message);
            throw new Error('Error al establecer la conexión con mongodb');
        }
    }
    
    return instance;
}


module.exports = {getConnection};