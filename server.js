// dotenv dùng để tạo biến môi trường
require('dotenv').config();

// connect database
const {connectDB} = require('./configs/db')

connectDB();

const express = require('express');
const cors = require('cors');
//Import Error Handler
const {errorHandler} = require('./middlewares/errorHandler')

//Import Route
const authRoute = require('./routes/authRoute');
const postRoute = require('./routes/postRoute');

const app = express();

// cors dùng để giao tiếp backend và frontend
app.use(cors());

// body parse hay còn gọi là middle ware được tích hợp trong express
app.use(express.json());

// mount route (connect route vs server)
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/posts',postRoute);

//Unhandled Route
app.all('*',(req,res,next)=>{
    const err = new Error('Không tìm thấy trang');
    err.statusCode = 404;
    next(err);
})
app.use(errorHandler);
const port = process.env.APP_PORT;

app.listen(port,()=>{
    console.log(`Server đang chạy tại port http://localhost:${port}`);
})