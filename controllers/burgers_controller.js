//imports
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();
var Burger = require("../models/burger.js");


//routes and logic for each 

//get 
router.get("/", function(req, res){
    Burger.findAll().then(function(results){
        var burgerObject = {
            burgers: results
        }
        console.log("get is good");
        res.render("index", burgerObject);
    });
});


    // burger.selectAll(function(data){
    //     var burgerObject = {
    //         burgers: data
    //     };
    //     // console.log(burgerObject.burgers);
//         res.render("index", burgerObject);
//     });
// })



//add
router.post("/api/burgers",function(req, res){
    Burger.create()
    // burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured],function(result){
    //     // console. log(result);
    //     res.json(result);
    // } );
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


module.exports = router;


//export routes for server


//new new 



// module.exports = function(app){
//     //add
// router.post("/api/burgers",function(req, res){
//     burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured],function(result){
//         // console.log(result);
//         res.json(result);
//     } );
// })
    
    
    //post
//     app.post("/api/burgers",function(req,res){
//         var burger = req.body;
//         Burger.create(burger).then(function(results){
//             console.log("added");
//         })

    
    
//     });

//     //get 
//     app.get("/", function(req, res){
//         Burger.findAll().then(function(results){
//             res.render("index",results);
//         });
//     });

//     //upddate one  
//     app.put("api/burgers/:id"),function(req, res){
//         var condition = req.params.id;
//         Burger.update(
//             {devoured: req.body.devoured},
//             {where: condition}
//         ).then(function(results){
//             if(result.changedRows ===0){
//                 console.log("oops");
//                 return res.status(404).end();
//             }else{
//            }
