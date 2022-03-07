var express = require("express");
var app = express();
const port = process.env.PORT || 5000



app.get("/", function(req, res){
    res
    .status(200)
    .sendFile("index.js");

})



app.listen(port, function(){
    console.listen("we are listening at port 3000");
});