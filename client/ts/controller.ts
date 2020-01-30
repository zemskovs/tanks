import { map } from "./map";
import { iYCnt } from "./constants";
import { oTank, tTank } from "./tank";
import { transport } from "./transport";

export class Controller {
  map = map;
  player;

  constructor(player) {
    this.player = player;
  }

	up() {
		transport.emit(
			`move1`,
			JSON.stringify({ action: "up", player: this.player })
		);
		transport.on(`up1`, msg => {
			const p = JSON.parse(msg);
			this.player.y = p.y
		});
	}

	down() {
		transport.emit(
			`move1`,
			JSON.stringify({ action: "down", player: this.player })
		);
		transport.on(`down1`, msg => {
			const p = JSON.parse(msg);
			this.player.y = p.y
		});
	}

	right() {
		transport.emit(
			`move1`,
			JSON.stringify({ action: "right", player: this.player })
		);
		transport.on(`right1`, msg => {
			const p = JSON.parse(msg);
			this.player.x = p.x
		});
	}

	left() {
		transport.emit(
			`move1`,
			JSON.stringify({ action: "left", player: this.player })
		);
		transport.on(`left1`, msg => {
			const p = JSON.parse(msg);
			this.player.x = p.x
		});
	}
}

