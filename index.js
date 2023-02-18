const express = require("express");
const cors = require('cors')

const categories = require('./routes/categories');
const fiction = require('./routes/fiction');
const nonFiction = require('./routes/non-fiction');
const classics = require('./routes/classics');
const academics = require('./routes/academics');
const data = require('./routes/allData');

const app = express();

app.use(cors());
app.use("/",categories);
app.use("/",fiction);
app.use("/",nonFiction);
app.use("/",classics);
app.use("/",academics);
app.use("/",data);

app.listen(5000,function(){
    console.log( "Server is running in port 5000")
})


