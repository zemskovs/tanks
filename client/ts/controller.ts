import { map } from "./map";
import { iYCnt } from "./constants";
import { oTank, tTank } from "./tank";
import { transport } from "./transport";

export class Controller {
  map = map;
  player;

  constructor(player) {
	this.player = player;
	console.log(player.p)
  }

	up() {
		transport.emit(
			`move${this.player.p}`,
			JSON.stringify({ action: "up", player: this.player })
		);
		transport.on(`up${this.player.p}`, msg => {
			const p = JSON.parse(msg);
			this.player.y = p.y
		});
	}

	down() {
		transport.emit(
			`move${this.player.p}`,
			JSON.stringify({ action: "down", player: this.player })
		);
		transport.on(`down${this.player.p}`, msg => {
			const p = JSON.parse(msg);
			this.player.y = p.y
		});
	}

	right() {
		transport.emit(
			`move${this.player.p}`,
			JSON.stringify({ action: "right", player: this.player })
		);
		transport.on(`right${this.player.p}`, msg => {
			const p = JSON.parse(msg);
			this.player.x = p.x
		});
	}

	left() {
		transport.emit(
			`move${this.player.p}`,
			JSON.stringify({ action: "left", player: this.player })
		);
		transport.on(`left${this.player.p}`, msg => {
			const p = JSON.parse(msg);
			this.player.x = p.x
		});
	}
}

