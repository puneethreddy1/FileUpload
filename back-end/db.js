const Mongoose = require('mongoose');
const mongoURL = "mongodb://127.0.0.1/mern-rooms";
// const mongoURL = "mongodb+srv://puneeth:puneeth2542@cluster0.zlq2r.mongodb.net/mern-rooms";
Mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })

var connection = Mongoose.connection;
connection.on('error', () => {
    console.log("mongoDB connection failed")
})
connection.on('connected', () => {
    console.log("mongoDB connection successfull")
})

module.exports = Mongoose;