const mongoose = require('mongoose');

const dbConfig = "mongodb+srv://mongodb:mongodb@cluster0.hicjtxx.mongodb.net/?retryWrites=true&w=majority"

mongoose.set('strictQuery', false);

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUniFiedTopology: true
});

module.exports = connection;