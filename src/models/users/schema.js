const mongoose = require('mongoose');

const schema = mongoose.Schema({
    username: {
        unique: true,
        type: String
    },
    password: String,
    fullName: String,
    email: String,
    role: {
        type: String,
        enum: ['CLIENT', 'PRODUCER','ADMIN']
    }
}, {collection: 'users'});

module.exports = schema;