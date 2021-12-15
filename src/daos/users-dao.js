const userModel = require('../models/users/model');

const findUserByCredentials = (username, password) => {
    return userModel.findOne({username, password});
}

const createUser = (userBody) => {
    const username = userBody.username;
    const password = userBody.password;
    const fullName = userBody.fullName;
    const email = userBody.email;
    const role = userBody.role;
    return userModel.create({username, password, fullName, email, role});
}

const updateUser = (userBody) => {
    return userModel.updateOne({_id: userBody._id}, {$set: userBody});
}

const findAllUsers = () => userModel.find()

const findAllProducers = () => userModel.find({role: 'PRODUCER'})

const findAllClients = () => userModel.find({role: 'CLIENT'})

const findAllAdmins = () => userModel.find({role: 'ADMIN'})

const findUserById = (userId) => {
    return userModel.findById(userId)
}

module.exports = {
    findUserByCredentials,
    createUser,
    updateUser,
    findAllUsers,
    findUserById,
    findAllProducers,
    findAllClients,
    findAllAdmins
}