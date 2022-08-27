const bodyParser = require("body-parser");
const express=require("express");
const app=express();
const router = express.Router();
const CsvUpload = require("express-fileupload");

app.use(CsvUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/uploaddata',
        (req, res, next) => { console.log(req.body) });