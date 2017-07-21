var express = require('express');
var app = express();
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
    user: 'root',
    password: '',
    database: 'videos'
});

app.use('/static',express.static(__dirname+'/data'));

connection.connect(function(){
	 console.log("successfully connected");
});


app.get("/",function(req,res){
	res.render("home.ejs");
});
app.get("/books",function(req,res){
   res.render("books.ejs");
});
app.listen("4321",function(){
	console.log("successfully connected");
	
});
app.get("*",function(req,res){
	res.send("page not found");
});