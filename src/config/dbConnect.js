const mongoose = require('mongoose')
require('dotenv').config();
const dbConnect = async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}`);
        console.log('mongodb connected succesfully');
    } catch (error) {
        console.log(`Error ${error.message}`)
    }
};

module.exports = dbConnect;