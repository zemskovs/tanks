const express = require("express");
const app = require("express")();
const http = require("http").createServer(app);
var io = require("socket.io")(http);

app.use(express.static(__dirname + "/dist"));

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/dist/index.html");
});

io.on("connect", function(socket) {
	console.log("work");
});

http.listen(3000, function() {
	console.log("listening on *:3000");
});
