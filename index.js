const express = require("express");
const app = express();
const testRouter = require('./modules/test/testRouter.js');

app.use(express.json());

app.use('/',testRouter);

 

app.listen(3000,() => { console.log("Server load")});