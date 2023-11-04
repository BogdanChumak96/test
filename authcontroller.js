const user = require('./models/user')
const role = require('./models/role')
const bcrypt = require('bcryptjs');

class authcontroller {
    async registration(req,res){
        try {
            const {username, password} = req.body
            const candidate = await user.findOne({username})
            if (candidate) {
                return res.status(400).json({message: 'That username was already taken'})
            }
        const hashPassword = bcrypt.hashSync(password, 4);
        const userRole = await role.findOne({value: "User"})
            const user = new user({username, password: hashPassword, roles:[userRole.value]})
            await user.save()
            return res.json({message: "Account has been created"})
        } catch(e){
            console.log(e)
            res.status(400).json({message: 'Registration error'})
        }
    }
    async login(req,res){
        try {
        } catch(e){
            console.log(e)
            res.status(400).json({message: 'Login error'})
        }
    }
    async getUsers(req,res){
        try {
            
            res.json("server work")
        } catch(e){
            
        }
    }
}

module.exports = new authcontroller()