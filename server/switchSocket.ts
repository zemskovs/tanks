import { tankController } from "./tankController/tankController";

export function switchSocket(msg, number, io) {
	switch (msg.action) {
		case "up": {
			io.emit(`up${number}`, JSON.stringify(tankController.up(msg.player)));
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
}
