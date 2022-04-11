const expressAsyncHandler = require('express-async-handler');
const User = require('../../model/User');

const registerUser = expressAsyncHandler(async (req,res)=>{
    const {email,firstname,lastname,password} = req?.body;
    const userExists = await User.findOne({email});
    if(userExists) throw new Error ('User already exist');
    try {
        const user = await User.create({email,firstname,lastname,password});
        res.status(200).json(user);
    } catch (error) {
        res.send(error);
    }
});

const fetchUsersCtrl = expressAsyncHandler(async(req,res)=>{
    const users = await User.find();
    res.json(users);
})

module.exports = {registerUser ,fetchUsersCtrl};