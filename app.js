const express=require("express");
const bodyparser=require("body-parser");
const app=express();
app.set("view engine","ejs");
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
var postlist=[];
app.get("/",function(req,res){
    res.render("website",{post:postlist});
});
app.get("/compose",function(req,res){
    res.render("compose");
});
app.post("/compose",function(req,res){
    postlist.push([req.body.title,req.body.post,req.body.description]);
    res.redirect("/compose");
});

app.listen(3000,function(){
    console.log("server is running on port 3000");
});
