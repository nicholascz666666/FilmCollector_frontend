const mongoose = require('mongoose');

const producerFilmsSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UsersModel'
    },
    username: String,
    filmTitle: String,
    filmId: String
}, {collection: 'producerFilms'});

module.exports = producerFilmsSchema;