var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

//parse app/json
app.use(bodyParser.json());

//allow handlebars
var exphbs = require("express-handlebars"); 

app.engine("handlebars", exphbs({defaultLayout: "main"}));

app.set("view engine", "handlebars");

//import routes and give the server access
var routes=require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);

});