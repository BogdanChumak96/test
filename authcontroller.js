const user = require('./models/user')
const role = require('./models/role')

class authcontroller {
    async registration(req,res){
        try {

        } catch(e){

        }
    }
    async login(req,res){
        try {

        } catch(e){
            
        }
    }
    async getUsers(req,res){
        try {
            const userRole = new role()
            const adminRole = new role({value: "ADMIN"})
            await userRole.save()
            await adminRole.save()
            res.json("server work")
        } catch(e){
            
        }
    }
}

module.exports = new authcontroller()