const mongoose = require('mongoose')
const config = require('../config/config')

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/'+config.MONGO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connected to MongoDB')
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message)
        process.exit(1)
    }
}

module.exports = connect;
