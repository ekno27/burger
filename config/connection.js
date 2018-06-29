// var mysql = require("mysql");
// var connection


//     connection = mysql.createConnection({
//         host: "localhost",
//         port: process.env.port || 3306,
//         user: "root",
//         password: "root.",
//         database: "burgers_db"
//     });

// //make a connection
// connection.connect(function(err){
//     if(err){
//         console.log("error connecting " + err.stack);
//         return;
//     }
//     console.log("connected as id" + connection.threadId);

// });

// module.exports = connection;

//new new 

var Sequelize = require("sequelize");

//sql connection using sqlize
var sequelize = new Sequelize("burgers_db", "root", "root.",{
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
});

module.exports = sequelize;