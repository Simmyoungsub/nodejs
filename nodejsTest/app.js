var firebase = require("firebase"); 
var express = require("express");
var app = express(); 
var server = require("http").createServer(app);
var io = require("socket.io")(server);
var port = process.env.PORT || 3000;

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


																																																																																												// listens
																																																																																												// on
																																																																																												// port
																																																																																												// 3000
																																																																																												// server.listen(port,
																																																																																												// function
																																																																																												// () {
																																																																																												// console.log("Server
																																																																																												// listening
																																																																																												// on
																																																																																												// port
																																																																																												// %d",
																																																																																												// port);
																																																																																												// });
																																																																																												// //
																																																																																												// Routing
																																																																																												// to
																																																																																												// static
																																																																																												// files
																																																																																												// app.use(express.static(__dirname
																																																																																												// +
																																																																																												// "/public"));
																																																																																												// //
																																																																																												// Socket
																																																																																												// server
																																																																																												// listens
																																																																																												// on
																																																																																												// connection
																																																																																												// event
																																																																																												// io.on("connection",
																																																																																												// function
																																																																																												// (socket)
																																																																																												// {
																																																																																												// console.log("Connected
																																																																																												// and
																																																																																												// ready!");
																																																																																												// //
																																																																																												// firebase
																																																																																												// reference
																																																																																												// listens
																																																																																												// on
																																																																																												// value
																																																																																												// change,
																																																																																												// //
																																																																																												// and
																																																																																												// return
																																																																																												// the
																																																																																												// data
																																																																																												// snapshot
																																																																																												// as
																																																																																												// an
																																																																																												// object
																																																																																												// firebaseRef.on("value",
																																																																																												// function
																																																																																												// (snapshot)
																																																																																												// {
																																																																																												// var
																																																																																												// colorChange
																																																																																												// =
																																																																																												// snapshot.val();
																																																																																												// //
																																																																																												// Print
																																																																																												// the
																																																																																												// data
																																																																																												// object's
																																																																																												// values
																																																																																												// console.log("snapshot
																																																																																												// R: "
																																																																																												// +
																																																																																												// colorChange.r);
																																																																																												// console.log("snapshot
																																																																																												// B: "
																																																																																												// +
																																																																																												// colorChange.b);
																																																																																												// console.log("snapshot
																																																																																												// G: "
																																																																																												// +
																																																																																												// colorChange.g);
																																																																																												// });
																																																																																												// });
