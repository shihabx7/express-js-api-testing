var express= require('express');

const app=express();

app.get("/",function(req,res){

    res.send("hello express js");
});
app.get("/download",function(req,res){

   res.download("./uploads/gdn.png");
});

app.get("/red",function(req,res){

    res.redirect("http://127.0.0.1:8000/404");
 });

 app.get("/404",function(req,res){

    res.send("Page redirectt to 404");
 });
 app.get("/header",function(req,res){


    res.append("name","shihab");
    res.append("id","0123456");
    res.append("city","Dhaka");
    res.send("header data transfer test");
    res.status(201).end();
 })


app.listen(8000,function(){
console.log("Server is running");

});