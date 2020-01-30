import * as express from "express";
import * as httpServer from "http";
import * as sockets from "socket.io";
import api from "./api/api";
import { map } from "./map/map";
import { tankController } from "./tankController/tankController";

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

io.on("connection", function(socket) {
	console.log("connect");
	socket.on("move1", (message) => {
		const msg = JSON.parse(message);
		console.log(msg)
		switch (msg.action) {
			case "up": {				
				io.emit("up1", JSON.stringify(tankController.up(msg.player)))
				break
			}
		}
	})

});


http.listen(3000, function() {
	console.log("listening on *:3000");
});
