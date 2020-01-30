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
    this.player.i = 3;

    // checking collisions
    var iCurCelX = (2 * this.player.x) / 48;
    var iCurCelY = (2 * this.player.y) / 48;
    if (iCurCelY + 2 < iYCnt) {
      var iTest1 = this.map[iCurCelY + 2][iCurCelX];
      var iTest2 = this.map[iCurCelY + 2][iCurCelX + 1];

      if ((iTest1 == 0 || iTest1 == 3) && (iTest2 == 0 || iTest2 == 3)) {
        this.player.y += 24;
        if (this.player.y > 576) {
          //iCellSize * (iYCnt-2)
          this.player.y = 576;
        }
      }
    }
  }

  right() {
    this.player.i = 0;

    // checking collisions
    var iCurCelX = (2 * this.player.x) / 48;
    var iCurCelY = (2 * this.player.y) / 48;
    var iTest1 = this.map[iCurCelY][iCurCelX + 2];
    var iTest2 = this.map[iCurCelY + 1][iCurCelX + 2];

    if ((iTest1 == 0 || iTest1 == 3) && (iTest2 == 0 || iTest2 == 3)) {
      this.player.x += 24;
      if (this.player.x > 576) {
        //iCellSize * (iXCnt-2)
        this.player.x = 576;
      }
    }
  }

  left() {
    this.player.i = 1;

    // checking collisions
    var iCurCelX = (2 * this.player.x) / 48;
    var iCurCelY = (2 * this.player.y) / 48;
    var iTest1 = this.map[iCurCelY][iCurCelX - 1];
    var iTest2 = this.map[iCurCelY + 1][iCurCelX - 1];

    if ((iTest1 == 0 || iTest1 == 3) && (iTest2 == 0 || iTest2 == 3)) {
      this.player.x -= 24;
      if (this.player.x < 0) {
        this.player.x = 0;
      }
    }
  }
}

