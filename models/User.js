const mongoose = require('mongoose')
const Schema  = mongoose.Schema;

const UserSchema = new Schema({
    username:  String, // String is shorthand for {type: String}
    password: String,
    role:   String,
});

const User = mongoose.model("User", UserSchema)

module.exports = User