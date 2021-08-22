var express= require('express');

const app=express();

app.get("/",function(req,res){

    res.send("hello express js");
});

app.listen(8000,function(){
console.log("Server is running");

});