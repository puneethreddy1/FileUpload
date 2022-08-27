const express = require("express")
const app = express();
var bodyParser = require('body-parser');

//const mongoose=require("mongoose")
const dbconfig = require('./db')
const usersRoute = require('./routes/usersRoute')

app.use(bodyParser.json({limit:1024000}));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

 app.use('/api/users', usersRoute)

app.listen(5000, function () {
    console.log("server started running")
}) 
//