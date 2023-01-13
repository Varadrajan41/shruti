var express=require("express");
var app=express();
var bodyparser=require("body-parser");
var mongoose=require("mongoose");
var router=require("./Router/router");


//mongodb://0.0.0.0:27017/test
var url="mongodb://0.0.0.0:27017/test";

mongoose.connect(url,function(err,result){
if(err){
    console.log("error occurred");
}
else{
    console.log("Connection done with database");
}
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use("/",router);

app.listen(4000);
console.log("server listening on port 4000");
module.exports=app;