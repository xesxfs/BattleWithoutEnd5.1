class ColorTransform {

	public static transform(r: number = 1, g: number = 1, b: number = 1, a: number = 1, rset = 0, gset = 0, bset = 0, aset = 0): egret.ColorMatrixFilter {
		let matrixs = [
			1, 0, 0, 0, 0,
			0, 1, 0, 0, 0,
			0, 0, 1, 0, 0,
			0, 0, 0, 1, 0
		]
		matrixs[0] = r;
		matrixs[6] = g;
		matrixs[12] = b;
		matrixs[18] = a;
		matrixs[4] = rset;
		matrixs[8] = gset;
		matrixs[12] = bset;
		matrixs[16] = aset;
		return new egret.ColorMatrixFilter(matrixs);
	}
}