class ColorTransform extends egret.ColorMatrixFilter {
	private matrixs = [
		1, 0, 0, 0, 0,
		0, 1, 0, 0, 0,
		0, 0, 2, 0, 0,
		0, 0, 0, 1, 0
	]

	public constructor(r: number = 1, g: number = 1, b: number = 1, a: number = 1) {
		super();
		this.matrixs[0] = r;
		this.matrixs[6] = g;
		this.matrixs[12] = b;
		this.matrixs[18] = 0;
		this.matrix = this.matrixs;

	}
}