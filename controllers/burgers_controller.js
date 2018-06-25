//imports
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();


//routes and logic for each 

//get 
router.get("/", function(req, res){
    burger.selectAll(function(data){
        console.log(data);
        res.send(data);
    });
});



//add
router.post("/api/burgers",function(req, res){
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured],function(result){
        console.log(result);
        res.json(result);
    } );
})


//update fix update
router.put("/api/burgers/:id",function(req,res){
    var condition = "id = " + req.params.id;
    console.log(condition);
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result){
        // console.log(devoured);
        if(result.changedRows ===0){
            console.log("oops");
            return res.status(404).end();
        }else{
            console.log("Data updated successfully");
            res.status(200).end();
        }
    });
});




//export routes for server
module.exports= router;