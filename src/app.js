const express = require('express');
const dbConnect = require('./config/dbConnect');
const userRoute = require('./routes/users/userRoute');
const { errorHandler,notFound } = require('./middlewares/errorMiddleware');

const app = express();

// const logger = (req,res,next)=>{
//     console.log("I am logger");
//     next();  
// };

// app.use(logger);

dbConnect();

app.use(express.json());

//routes
app.use('/api/users',userRoute);

//Middleware
app.use(notFound);
app.use(errorHandler);

module.exports = app;