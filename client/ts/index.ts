import { iXCnt, iCellSize, iYCnt } from "./constants";
import { drawScene } from "./scene";
import { Controller } from "./controller";
import { apiClient } from "./api";
import { oTank, tTank } from "./tank";

fetch("/getId")
  .then(res => res.json())
  .then(val => {
    const oTankController =
      val.id == 1 ? new Controller(oTank) : new Controller(tTank);
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
        // case 87:
        // 	tTankController.up();
        // 	break;
        // case 83:
        // 	tTankController.down();
        // 	break;
        // case 65:
        // 	tTankController.left();
        // 	break;
        // case 68:
        // 	tTankController.right();
        // 	break;
      }
    };
  });

const canvas = <HTMLCanvasElement>document.getElementById("canvas");

canvas.width = iXCnt * iCellSize;
canvas.height = iYCnt * iCellSize;

const context = canvas.getContext("2d");

const scene = () => drawScene(context, canvas);

setInterval(scene, 1000 / 24);
