import { iXCnt, iCellSize, iYCnt } from "./constants";
import { drawScene } from "./scene";
import { oTankController, tTankController } from "./controller";
import { transport } from "./transport";
import { apiClient } from "./api";

const canvas = <HTMLCanvasElement>document.getElementById("canvas");

canvas.width = iXCnt * iCellSize;
canvas.height = iYCnt * iCellSize;

const context = canvas.getContext("2d");

const scene = () => drawScene(context, canvas);

window.onkeydown = event => {
	switch (event.keyCode) {
		case 38: {
			oTankController.up();
			transport.emit("move", oTankController)
			break;
		}
		case 40:
			oTankController.down();
			break;
		case 37:
			oTankController.left();
			break;
		case 39:
			oTankController.right();
			break;
		case 87:
			tTankController.up();
			break;
		case 83:
			tTankController.down();
			break;
		case 65:
			tTankController.left();
			break;
		case 68:
			tTankController.right();
			break;
	}
};

apiClient.getMap()

setInterval(scene, 1000 / 24);
