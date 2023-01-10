const mongoose = require('mongoose');

const UserDataSchema = new mongoose.Schema({
    username: String,
    password: String,
});

module.exports = mongoose.model('UserData', UserDataSchema);