const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");

const peopleRoutes = require("./Routes/people");
const mysqlConnection = require("./Routes/connection");


var app = express();

app.use(bodyParser.json());
app.use("/people", peopleRoutes);

app.listen(3000);

