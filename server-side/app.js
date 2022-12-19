const express = require('express')
const morgan = require('morgan')
const createError = require('http-errors')
require('dotenv').config()
require('./helpers/init_mongodb')
const cors = require('cors')
const path = require('path')

const app = express();
app.use(cors())
app.use(morgan('dev'))   
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use('/auth', require('./Routes/Auth.Route'))
app.use('/role', require('./Routes/Role.Route'))
app.use('/user', require('./Routes/User.Route'))
app.use('/society', require('./Routes/Society.Route'))
app.use('/event', require('./Routes/Event.Route'))
app.use('/complaint', require('./Routes/Complaint.Route'))
app.use('/file', require('./Routes/File.Route'))

app.use('/workspace', require('./Routes/Workspace.Route'))

app.use("/uploads", express.static(path.join("backend/images"))); 

app.get('/',  async (req,res,next) =>{
    res.send("hello .....")
});

app.use(async (req,res,next)=>{  
    next(createError.NotFound('This route does not exist '));
});

app.use((err,req,res,next)=>{
    res.status(err.status || 500)
    res.send({
        error:{
            status: err.status || 500,
            message: err.message,
        }
    })
});


const PORT = process.env.PORT || 4000

app.listen(PORT,() =>{
    console.log(`Server Running on port ${PORT}`)
});