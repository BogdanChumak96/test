const {Schema, model} = require('mongoose')


const Usew = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String,required: true},
    roles: [{type: String, ref: 'role'}]
})

module.exports = model('user',user)