class ColorTransform extends egret.ColorMatrixFilter {

	public static transform(r: number = 1, g: number = 1, b: number = 1, a: number = 1): egret.ColorMatrixFilter {
		let matrixs = [
			1, 0, 0, 0, 0,
			0, 1, 0, 0, 0,
			0, 0, 2, 0, 0,
			0, 0, 0, 1, 0
		]
		matrixs[0] = r;
		matrixs[6] = g;
		matrixs[12] = b;
		matrixs[18] = a;
		return new egret.ColorMatrixFilter(matrixs);

	}
}