const User = require('../models/UserData');

module.exports = {

    async listAll(request, response) {
        const userList = await User.find();
        
        return response.send(userList)
    }
}