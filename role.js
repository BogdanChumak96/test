const {Schema, model} = require('mongoose')


const Usew = new Schema({
    value: {type: String, unique: true, required: true, default: "User"},
})

module.exports = model('role', role)