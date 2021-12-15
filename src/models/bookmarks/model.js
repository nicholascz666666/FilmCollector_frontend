const mongoose = require('mongoose');
const usersSchema = require('./schema');
const model = mongoose.model('BookmarkModel', usersSchema);

module.exports = model;