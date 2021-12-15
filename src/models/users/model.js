const mongoose = require("mongoose")
const usersSchema = require("./schema")
const model = mongoose.model("UserModel", usersSchema)
module.exports = model