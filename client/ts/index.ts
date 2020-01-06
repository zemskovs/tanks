import { iXCnt, iCellSize, iYCnt } from "./constants";
import { drawScene } from "./scene";

const canvas = <HTMLCanvasElement>document.getElementById("canvas");

canvas.width = iXCnt * iCellSize;
canvas.height = iYCnt * iCellSize;

const context = canvas.getContext("2d");

const scene = () => drawScene(context, canvas);

setInterval(scene, 60);
