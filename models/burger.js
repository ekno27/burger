//import orm for function
var orm = require("../config/orm.js");

var burger = {
    /*Only a callback is needed 
     */
    selectAll: function(callBack){
        orm.selectAll("burgers",function(res){
            callBack(res);
        });//end of orm
    },//end of select all

    /**
     * cols: ["burger_name", "devoured"]
     * values: ["name of burger", boolean]
     * callback: functions w/ no parameters 
     */
    insertOne: function(cols, values, callBack){
        orm.insertOne("burgers", cols, values, function(res){
            callBack(res);
        });//end of orm 
    },//end of insert one
    

    /**
     * objectColValues: {name: "lana del rey"}
     * condition: id = 1
     * callback: function
     */
    updateOne: function(objectColValues, condition, callBack){
        orm.updateOne("burgers", objectColValues, condition, function(res){ 
            callBack(res);
        });

    }

    



}//end of burger 


//checking functions

// burger.selectAll(function(data){
//     console.log("yeeeeeeettoototototo");
//     // console.log(data);
// })

// burger.insertOne(["burger_name", "devoured"],
// ["the tiny cheese", false], function(){
//     console.log("Item created successfully");
// });

burger.updateOne({burger_name: "Jessica cmon I need you "}, "id = 1", function(){
    console.log("Value updated Successfully");
});

module.exports = burger; 
