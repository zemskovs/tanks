import { iXCnt, iCellSize, iYCnt } from "./constants";
import { drawScene } from "./scene";
import { Controller } from "./controller";
import { apiClient } from "./api";
import { oTank, tTank } from "./tank";
import { transport } from "./transport";

fetch("/getId")
	.then(res => res.json())
	.then(val => {
		const oTankController =
			val.id == 1 ? new Controller(oTank) : new Controller(tTank);
		console.log(val.id);
		window.onkeydown = event => {
			switch (event.keyCode) {
				case 38: {
					oTankController.up();
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
			}

			const anotherPlayerId = val.id == 1 ? 2 : 1;
			const anotherPlayerInstance = val.id == 1 ? tTank : oTank;
			//обновляем второго игрока
			transport.on(`up${anotherPlayerId}`, msg => {
				const p = JSON.parse(msg);
				anotherPlayerInstance.y = p.y;
			});
			transport.on(`down${anotherPlayerId}`, msg => {
				const p = JSON.parse(msg);
				anotherPlayerInstance.y = p.y;
			});
			transport.on(`right${anotherPlayerId}`, msg => {
				const p = JSON.parse(msg);
				anotherPlayerInstance.x = p.x;
			});
			transport.on(`left${anotherPlayerId}`, msg => {
				const p = JSON.parse(msg);
				anotherPlayerInstance.x = p.x;
			});
		};
	});

const canvas = <HTMLCanvasElement>document.getElementById("canvas");

canvas.width = iXCnt * iCellSize;
canvas.height = iYCnt * iCellSize;

const context = canvas.getContext("2d");

const scene = () => drawScene(context, canvas);

setInterval(scene, 1000 / 24);
