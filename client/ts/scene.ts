import { clear } from "./helpers";
import { iYCnt, iXCnt, iCellSize } from "./constants";
import { imgBrick, imgSteel, imgForest, imgWater } from "./images";
import { oTank, tTank } from "./tank";
import { map } from "./map";

export function drawScene(
	context: CanvasRenderingContext2D,
	canvas: HTMLCanvasElement
) {
	clear(context, canvas);

	// fill background
	context.fillStyle = "#111";
	context.fillRect(0, 0, canvas.width, canvas.height);

	// save current context
	context.save();

	// walk through our array
	for (var y = 0; y < iYCnt; y++) {
		for (var x = 0; x < iXCnt; x++) {
			switch (map[y][x]) {
				case 0: // skip
					break;
				case 1: // draw brick block
					context.drawImage(
						imgBrick,
						0,
						0,
						iCellSize,
						iCellSize,
						x * iCellSize,
						y * iCellSize,
						iCellSize,
						iCellSize
					);
					break;
				case 2: // draw steel block
					context.drawImage(
						imgSteel,
						0,
						0,
						iCellSize,
						iCellSize,
						x * iCellSize,
						y * iCellSize,
						iCellSize,
						iCellSize
					);
					break;
				case 3: // draw forest block
					context.drawImage(
						imgForest,
						0,
						0,
						iCellSize,
						iCellSize,
						x * iCellSize,
						y * iCellSize,
						iCellSize,
						iCellSize
					);
					break;
				case 4: // draw water block
					context.drawImage(
						imgWater,
						0,
						0,
						iCellSize,
						iCellSize,
						x * iCellSize,
						y * iCellSize,
						iCellSize,
						iCellSize
					);
					break;
			} //todo: to universal
		}
	}

	// restore current context
	context.restore();

	// draw tank
	context.drawImage(
		oTank.image,
		oTank.i * oTank.w,
		0,
		oTank.w,
		oTank.h,
		oTank.x,
		oTank.y,
		oTank.w,
		oTank.h
	);
	context.drawImage(
		tTank.image,
		tTank.i * tTank.w,
		0,
		tTank.w,
		tTank.h,
		tTank.x,
		tTank.y,
		tTank.w,
		tTank.h
	);	//toDO: to obj
}
