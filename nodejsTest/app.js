var firebase = require("firebase"); 
var express = require("express");
var app = express(); 
var server = require("http").createServer(app);
var bodyParser = require('body-parser');
var mysql = require("mysql");
var io = require("socket.io")(server);
var port = process.env.PORT || 3000;
var queryString = require("querystring");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

var connection = mysql.createConnection({

});

connection.connect(function(err){
	if(err){
		console.error("mysql connection error");
		console.error(err);
		throw err;
	}else{
		console.log("database connect");
	}
});

console.log("database connection pass");

//로컬에서 돌릴때는 주석 처리
//firebase.intializeApp({serviceAccount: ""}); 

server.listen(port, function () {     
	console.log("Server listening on port %d", port); 
	
});

app.use(express.static(__dirname + "/public"));

io.on("connection", function (socket) {     
	console.log("Connected and ready!");


	firebaseRef.on("value", function (snapshot) {         
		var colorChange = snapshot.val();
		console.log("snapshot R: " + colorChange.r);         
		console.log("snapshot B: " + colorChange.b);         
		console.log("snapshot G: " + colorChange.g);
	});
});

app.post("/test.json",function(req,res){
		console.log(req.body.id);
});
