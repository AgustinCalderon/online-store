const dotenv = require('dotenv');
dotenv.config();
const {mongoClient} = require('mongodb');

const client = new mongoClient(process.env.MONGO_URL)

async function connect() {
    try {
        await client.connect();
        console.log('Connecting to the database');
        return client
    } catch (error) {   
        console.error('Error connecting to the database');
        console.error(error);
        return null;
    }    
}

async function disconnect() {
    try {
        await client.close();
        console.log('Disconnecting from the database');
    } catch (error) {
        console.error('Error disconnecting from the database');
        console.error(error);
    }
}

module.exports = {connect, disconnect}