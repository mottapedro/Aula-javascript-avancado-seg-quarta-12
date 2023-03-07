const mongodb = require('mongoose');
mongodb.set("strictQuery", true)
const connectToDatabase = async () => {
    //mongostat --uri mongodb+srv://pedro_motta:<PASSWORD>@aula-node-exemplo-clust.wkgj8dp.mongodb.net 
    //mongodb+srv://pedro_motta:<password>@aula-node-exemplo-clust.wkgj8dp.mongodb.net/?retryWrites=true&w=majority
    await mongodb.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@aula-node-exemplo-clust.wkgj8dp.mongodb.net/?retryWrites=true&w=majority`,
        (error) => {
            if (error) {
                return console.log('erro ao conectar com o banco :', error)
            }
            return console.log('Conexão realizada com sucesso !')
        }//fecha o if


    )//fecha a função dos parametros de conexão
}//fecha a função de conexão


module.exports = connectToDatabase


