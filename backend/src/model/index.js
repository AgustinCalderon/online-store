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

    static async getById(id) {
        try {
            const clientMongo = await connectToMongoDB()
            if (!clientMongo) {
                return Error('Error connecting to the database')
            }
            const data = await clientMongo.db('store').collection('products').findOne({id: id})
            if (!data) {
                return {data: null, error: true}
            }
            console.log(data)
            await disconnectToMongoDB()
            return {data: data, error: false}
        } catch (error) {
            return error
        }
    }
}

module.exports = ProcductModel