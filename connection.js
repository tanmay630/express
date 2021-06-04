
const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({

    host : "localhost",
    user : "root",
    password : "password",
    database : "Eddu",
    multipleStatements : true

});


mysqlConnection.connect((err)=>{
if(!err) {
    console.log("Connected");
}
else {
    console.log("connection failed");
}
})

module.exports = mysqlConnection;
