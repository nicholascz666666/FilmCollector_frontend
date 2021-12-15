const mongoose = require('mongoose');

const schema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UsersModel'
    },
    username: String,
    filmTitle: String,
    filmId: String
}, {collection: 'recommendations'});

module.exports = schema;