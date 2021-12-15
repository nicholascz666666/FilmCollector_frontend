const mongoose = require('mongoose');
const usersSchema = require('./schema');
const model = mongoose.model('RecommendationModel', usersSchema);

module.exports = model;