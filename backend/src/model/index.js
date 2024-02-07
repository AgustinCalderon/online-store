const {connectToMongoDB, disconnectToMongoDB} = require('../setting/index')

class ProcductModel {
    static async getAll() {
        try {
            const clientMongo = await connectToMongoDB()
            if (!clientMongo) {
                return Error('Error connecting to the database')
            }
            const dataArray = await clientMongo.db('store').collection('products').find().toArray()
            if (!dataArray) {
                return {data: null, error: true}
            }
            console.log(dataArray)
            await disconnectToMongoDB()
            return {data: dataArray, error: false}
        } catch (error) {
            return error
        }
    }
}

module.exports = ProcductModel