import * as express from "express";
import * as httpServer from "http";
import * as sockets from "socket.io";
import api from "./api/api";
import { map } from "./map/map";

const app = express();
const http = httpServer.createServer(app);
const io = sockets(http);

app.use(express.static(__dirname + "/dist"));

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/dist/index.html");
});

app.get(api.map, (req, res) => {
	res.send(JSON.stringify(map));
});

io.on("connect", function(socket) {
	console.log("connect");
});

io.on("move", (socket) => {
	io.emit("up")
	console.log(socket)

})

http.listen(3000, function() {
	console.log("listening on *:3000");
});

