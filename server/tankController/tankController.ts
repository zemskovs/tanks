import { map } from "../map/map";
import { iYCnt } from "./consts";

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
		return player;
	}

	down(player) {
		player.i = 3;

		// checking collisions
		var iCurCelX = (2 * player.x) / 48;
		var iCurCelY = (2 * player.y) / 48;
		if (iCurCelY + 2 < iYCnt) {
			var iTest1 = this.map[iCurCelY + 2][iCurCelX];
			var iTest2 = this.map[iCurCelY + 2][iCurCelX + 1];

			if ((iTest1 == 0 || iTest1 == 3) && (iTest2 == 0 || iTest2 == 3)) {
				player.y += 24;
				if (player.y > 576) {
					//iCellSize * (iYCnt-2)
					player.y = 576;
				}
			}
		}
		return player;
	}

	right(player) {
		player.i = 0;

		// checking collisions
		var iCurCelX = (2 * player.x) / 48;
		var iCurCelY = (2 * player.y) / 48;
		var iTest1 = this.map[iCurCelY][iCurCelX + 2];
		var iTest2 = this.map[iCurCelY + 1][iCurCelX + 2];

		if ((iTest1 == 0 || iTest1 == 3) && (iTest2 == 0 || iTest2 == 3)) {
			player.x += 24;
			if (player.x > 576) {
				//iCellSize * (iXCnt-2)
				player.x = 576;
			}
		}
		return player;
	}

	left(player) {
		player.i = 1;

		// checking collisions
		var iCurCelX = (2 * player.x) / 48;
		var iCurCelY = (2 * player.y) / 48;
		var iTest1 = this.map[iCurCelY][iCurCelX - 1];
		var iTest2 = this.map[iCurCelY + 1][iCurCelX - 1];

		if ((iTest1 == 0 || iTest1 == 3) && (iTest2 == 0 || iTest2 == 3)) {
			player.x -= 24;
			if (player.x < 0) {
				player.x = 0;
			}
		}
		return player;
	}
}

export const tankController = new TankController();
