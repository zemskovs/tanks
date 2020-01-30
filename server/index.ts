import * as express from "express";
import * as httpServer from "http";
import * as sockets from "socket.io";
import api from "./api/api";
import { map } from "./map/map";
import { tankController } from "./tankController/tankController";
import { switchSocket } from "./switchSocket";

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

let id = 0;
app.get("/getId", (req, res) => {
	id = id + 1;
	if (id < 3) {
		res.send(JSON.stringify({ id: id }));
	}
	console.log(id);
});

io.on("connection", function(socket) {
	console.log("connect");
	socket.on("move1", message => {
		const msg = JSON.parse(message);
		const number = 1;
		switch (msg.action) {
			case "up": {
				io.emit(
					`up${number}`,
					JSON.stringify(tankController.up(msg.player))
				);
				break;
			}
			case "down": {
				io.emit(
					`down${number}`,
					JSON.stringify(tankController.down(msg.player))
				);
				break;
			}
			case "right": {
				io.emit(
					`right${number}`,
					JSON.stringify(tankController.right(msg.player))
				);
				break;
			}
			case "left": {
				io.emit(
					`left${number}`,
					JSON.stringify(tankController.left(msg.player))
				);
				break;
			}
		}
	});
	socket.on("move2", message => {
		const msg = JSON.parse(message);
		const number = 2;
		switch (msg.action) {
			case "up": {
				io.emit(
					`up${number}`,
					JSON.stringify(tankController.up(msg.player))
				);
				break;
			}
			case "down": {
				io.emit(
					`down${number}`,
					JSON.stringify(tankController.down(msg.player))
				);
				break;
			}
			case "right": {
				io.emit(
					`right${number}`,
					JSON.stringify(tankController.right(msg.player))
				);
				break;
			}
			case "left": {
				io.emit(
					`left${number}`,
					JSON.stringify(tankController.left(msg.player))
				);
				break;
			}
		}
	});
});

http.listen(
	80,
	process.env.OPENSHIFT_NODEJS_IP || process.env.IP || "192.168.31.122",
	function() {
		console.log("listening on 192.168.31.122");
	}
);
