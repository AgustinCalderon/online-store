const dotenv = require('dotenv');
dotenv.config()
const {MongoClient} = require('mongodb')

const client = new MongoClient(process.env.MONGO_URL)

async function connectToMongoDB() {
    try {
        await client.connect()
        console.log('Connecting to the database')
        return client
    } catch (error) {   
        console.error('Error connecting to the database')
        return null
    }    
}

async function disconnectToMongoDB() {
    try {
        await client.close()
        console.log('Disconnecting from the database')
    } catch (error) {
        console.log('Error disconnecting from the database', error)
    }
}

module.exports = {connectToMongoDB, disconnectToMongoDB}