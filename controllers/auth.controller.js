
const userModel = require('../models/user-model')


exports.login = async (req, res) => {

    try {
    
        const user = await userModel.findOne({
            username: req.body.username
        })

        console.log(userModel, 'userModel');
        
        if(user && await user.verifyPassword(req.body.password)){
           return res.json(user)
        }

       throw new Error("Username/password not found")

    } catch (error) {
        
        res.status(400).json({
            error: true,
            message: error.message
        })
    }
    
}

exports.signup = async (req, res) => {

    try {
        const user = await userModel.findById(req.params.id)
        res.json(user)
    } catch (error) {
        res.status(404).json({
            error: true,
            message: error
        })
    }

}

exports.logout = async (req, res) => {
    try {

        const user = await userModel.create(req.body)
        // clean up
        res.json(user)
    } catch (error) {
        res.status(400).json({
            error: true,
            message: error
        })
    }

}


