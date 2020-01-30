import { iCellSize } from "./constants";

import { oImgTank, tImgTank } from "./images";

class Tank {
	x;
	y;
	w;
	h;
	i;
	image;
	p

	constructor(x, y, w, h, image, p) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.i = 0;
		this.image = image;
		this.p = p
	}
}

export const oTank = new Tank(iCellSize * 9, iCellSize * 24, 48, 48, oImgTank, 1);
export const tTank = new Tank(iCellSize * 15, iCellSize * 24, 48, 48, tImgTank, 2);//toDO: refactor
