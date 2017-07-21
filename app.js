var express = require('express');
var app = express();
var mysql = require('mysql');
var port = process.env.PORT || 8080 ;
app.use('/static',express.static(__dirname+'/data'));

app.get("/",function(req,res){
	res.render("home.ejs");
});
app.get("/books",function(req,res){
   res.render("books.ejs");
});
app.listen( port,function(){
	console.log("successfully connected");
});
app.get("*",function(req,res){
	res.send("page not found");
});
