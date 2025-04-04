const User = require("../models/user")

const getUser = async (req, res) => {
    const data = await User.find()
    res.json(data)
}

const registerNewUser = async (req, res) => {
    req.body.password = bcrypt.hash(req.body.password, 10)
    User.create(req.body)
    res.json({msg: 'user created!'})
}

module.exports = {getUser, registerNewUser}