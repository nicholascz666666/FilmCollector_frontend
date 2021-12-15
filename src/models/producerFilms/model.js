const mongoose = require('mongoose');
const usersSchema = require('./schema');
const producerFilmsModel = mongoose.model('ProducerFilmsModel', usersSchema);

module.exports = producerFilmsModel;