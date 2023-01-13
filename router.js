var express=require("express");
var mongoose=require("mongoose");
var schema=mongoose.Schema;
var router=express.Router();

var studSchema=new schema({
    name:String,
    roll:String,
    marks:String
});

var data=mongoose.model("data",studSchema,"studentData");

router.get("/stud",function(req,res)
{
    data.find().exec(function(err,result){
        if(err){
            res.send("No data found");
        }
        else{
            res.send(result);
        }
    });
});

router.post("/stud",function(req,res)
{
    var ob=new data({name:req.body.name,marks:req.body.marks,roll:req.body.roll});
    ob.save(function(err,result){
        if(err){
            console.log("err");
        }
        else{
            res.send(result);
        }
    });
});

router.delete("/stud/:roll",function(req,res){
    data.remove({roll:req.params.roll},function(err,doc){
        if(err){
            console.log(err);
            res.send("no data");
        }
        else{
            console.log(res);
            res.send("deleted");
        }
    });
});

router.put("/stud/:roll",function(req,res){

});


module.exports=router;