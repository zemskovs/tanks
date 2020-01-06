import { iCellSize } from "./constants";

import { imgTank } from "./images";

class Tank {
	x;
	y;
	w;
	h;
	i;
	image;

	constructor(x, y, w, h, image) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.i = 0;
		this.image = image;
	}
}

export const oTank = new Tank(iCellSize * 9, iCellSize * 24, 48, 48, imgTank);
