var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.connection({
        host: "localhost",
        port: process.env.port || 3306,
        user: "root",
        password: "root.",
        database: "burgers_db"
    });
   
}

//make a connection
connection.connect(function(err){
    if(err){
        console.log("error connecting " + err.stack);
        return;
    }
    console.log("connected as id" + connection.threadId);

});

module.exports = connection;