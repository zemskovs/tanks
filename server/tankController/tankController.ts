import { map } from "../map/map";
import {iYCnt} from "./consts"

class TankController {
	map = map;
	// player;

	up(player) {
		player.i = 2;

		// checking collisions
		var iCurCelX = (2 * player.x) / 48;
		var iCurCelY = (2 * player.y) / 48;
		if (iCurCelY) {
			var iTest1 = this.map[iCurCelY - 1][iCurCelX];
			var iTest2 = this.map[iCurCelY - 1][iCurCelX + 1];

			if ((iTest1 == 0 || iTest1 == 3) && (iTest2 == 0 || iTest2 == 3)) {
				player.y -= 24;
				if (player.y < 0) {
					player.y = 0;
				}
			}
		}
		console.log(player)
		return player
	}

	// down() {
	// 	this.player.i = 3;

	// 	// checking collisions
	// 	var iCurCelX = (2 * this.player.x) / 48;
	// 	var iCurCelY = (2 * this.player.y) / 48;
	// 	if (iCurCelY + 2 < iYCnt) {
	// 		var iTest1 = this.map[iCurCelY + 2][iCurCelX];
	// 		var iTest2 = this.map[iCurCelY + 2][iCurCelX + 1];

	// 		if ((iTest1 == 0 || iTest1 == 3) && (iTest2 == 0 || iTest2 == 3)) {
	// 			this.player.y += 24;
	// 			if (this.player.y > 576) {
	// 				//iCellSize * (iYCnt-2)
	// 				this.player.y = 576;
	// 			}
	// 		}
	// 	}
	// }

	// right() {
	// 	this.player.i = 0;

	// 	// checking collisions
	// 	var iCurCelX = (2 * this.player.x) / 48;
	// 	var iCurCelY = (2 * this.player.y) / 48;
	// 	var iTest1 = this.map[iCurCelY][iCurCelX + 2];
	// 	var iTest2 = this.map[iCurCelY + 1][iCurCelX + 2];

	// 	if ((iTest1 == 0 || iTest1 == 3) && (iTest2 == 0 || iTest2 == 3)) {
	// 		this.player.x += 24;
	// 		if (this.player.x > 576) {
	// 			//iCellSize * (iXCnt-2)
	// 			this.player.x = 576;
	// 		}
	// 	}
	// }

	// left() {
	// 	this.player.i = 1;

	// 	// checking collisions
	// 	var iCurCelX = (2 * this.player.x) / 48;
	// 	var iCurCelY = (2 * this.player.y) / 48;
	// 	var iTest1 = this.map[iCurCelY][iCurCelX - 1];
	// 	var iTest2 = this.map[iCurCelY + 1][iCurCelX - 1];

	// 	if ((iTest1 == 0 || iTest1 == 3) && (iTest2 == 0 || iTest2 == 3)) {
	// 		this.player.x -= 24;
	// 		if (this.player.x < 0) {
	// 			this.player.x = 0;
	// 		}
	// 	}
	// }
}

export const tankController = new TankController()
