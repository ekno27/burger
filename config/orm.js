//import sql connection
var connection = require("../config/connection.js");

//used in order to dynamically add question marks for a query 
function printQuestionMarks(num){
    var arr = [];
    for (var i = 0; i<num;i++){
        arr.push("?");
    }
    return arr.toString();
}

//converting object keys and value pairs to sql syntax
function objToSql(ob){
    var arr = [];

    //loop through the keys and push the key/value as a string in arr
    for (var key in ob){
        var value = ob[key];
        //check to skip hidden proprs
        if(Object.hasOwnProperty.call(ob, key)){
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if(typeof value ==="string" && value.indexOf(" ")>=0){
                value = "'"+ value +"'";
            }
                // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
                 // e.g. {sleepy: true} => ["sleepy=true"]
                arr.push(key + "=" + value);
        }
    }
      // translate array of strings to a single comma-separated string
     return arr.toString();
}

var orm ={
    
    //retrieves all items in table
    //table: "name of table"
    selectAll: function(table, callback){
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err,result){
            if (err) throw err;

            callback(result);
        })
    },
    //inserts an element onto the database
     /**
     * table: "table name"
     * cols: ["burger_name", "devoured"]
     * values: ["name of burger", boolean]
     * callback: functions w/ no parameters 
     */
    insertOne: function(table, columns, values, callback){
        //creation of the queryString
        var queryString = "INSERT INTO " + table;
        queryString +=" (" + columns.toString() + ")";
        queryString += " VALUES (" + printQuestionMarks(values.length) + ") ";

        // console.log(queryString);

        //connection query
        connection.query(queryString,values, function(err,result){
            if (err) throw err;

            callback(result);
        });//end of query
    },//end of function 
    
    //update the status of an element
    /**
     * table: "name of table"
     * objectColumnValues: {name: "value"}
     * condition: "id = 1"
     */
    updateOne: function(table, objectColumnValues, condition, callback){
        var queryString = "UPDATE " + table;
        queryString +=" SET " + objToSql(objectColumnValues) + " WHERE " + condition;
        
        connection.query(queryString, function(err,result){
            if (err) throw err;
            callback(result);
        });
    }

};//end of orm 

//exports to be used by burger.js 
module.exports = orm;


